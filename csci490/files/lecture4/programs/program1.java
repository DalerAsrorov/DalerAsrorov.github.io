package usc.edu;
import java.util.*;

public class Program {

	public static void main(String [] args) {
		// for loop
		for(int i = 0 ; i <= 5 ; i++) {
		        System.out.println("i is " + i);
		}

		// while loop
		int counter = 0;
		while(counter <= 5) {
			System.out.println("counter is " + counter);
			counter++;
		}

		// do-while loop
		int counter2 = 0;
		do {
			System.out.println("counter2 is " + counter2);
			counter2++;
		}while(counter2 <= 5);
	}
}
