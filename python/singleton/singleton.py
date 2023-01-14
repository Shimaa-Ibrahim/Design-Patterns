from threading import Lock, Thread
from typing import Any


class SingletonMeta(type):
    _instances = {}
    _lock = Lock()

    def __call__(cls, *args, **kwds):
        with cls._lock:
            if cls not in cls._instances:
                print("create new singleton instance")
                singleton_instance = super().__call__(*args, **kwds)
                cls._instances[cls] = singleton_instance
            else:
                print("singleton instance is already created")
            return cls._instances[cls]


class Singleton(metaclass=SingletonMeta):
    creation_attempts = 0

    def say(self):
        self.creation_attempts += 1
        print(f'Singleton says "Creations attempts are {self.creation_attempts}"')


def test_singleton():
    singleton = Singleton()
    singleton.say()

if __name__ == "__main__":
    for i in range(6):
        process = Thread(target=test_singleton)
        process.start()