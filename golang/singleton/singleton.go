package singleton

import (
	"fmt"
	"sync"
)

var lock = &sync.Mutex{}

type singleton struct {
	creationAttempts int
}

var singletonInstance *singleton

func GetInstance() *singleton {
	if singletonInstance == nil {
		lock.Lock()
		defer lock.Unlock()

		if singletonInstance == nil {
			fmt.Println("create new singleton instance")
			singletonInstance = &singleton{}
		} else {
			fmt.Println("singleton instance is already created")
		}

	} else {
		fmt.Println("singleton instance is already created")
	}

	singletonInstance.creationAttempts++
	return singletonInstance
}

func (s singleton) Say() {
	fmt.Printf("Singleton says \"Creations attempts are %v\"\n", s.creationAttempts)
}
