from dataclasses import dataclass
from mage_ai.shared.config import BaseConfig
from mage_ai.streaming.sinks.base import BaseSink
from typing import Dict, List
import time
from pymongo import MongoClient


@dataclass
class MangoDbConfig(BaseConfig):
    connection_string: str  # url to connect python to mongodb using pymongo
    database_name: str
    collection_name: str


class MangoDbSink(BaseSink):
    config_class = MangoDbConfig

    def init_client(self):
        self.client = MongoClient(self.config.connection_string)
        self.database = self.client[self.config.database_name]
        self.collection = self.database[self.config.collection_name]

    def batch_write(self, data: List[Dict]):
        if not data:
            return
        self.collection.insert_many(data)
        self._print(f'Batch ingest {len(data)} records, time={time.time()}. Sample: {data[0]}')
