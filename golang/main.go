package main

import (
	"fmt"

	"github.com/Shimaa-Ibrahim/Design-Patterns/golang/singleton"
)

func main() {
	// singleton design pattern
	singletenInstance := singleton.GetInstance()

	for i := 0; i < 5; i++ {
		go singleton.GetInstance()
	}

	fmt.Scanln()
	singletenInstance.Say()

}
