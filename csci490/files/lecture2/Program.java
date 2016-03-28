package usc.edu;
import java.util.*;

public class Program {

	public static void main(String [] args) {
		int a = 40;
		int b = 20;

		System.out.println(a + " + " + b + " will be equal to " + (a + b));
		System.out.println(a + " * " + b + " will be equal to " + (a * b));
		System.out.println(a + " - " + b + " will be equal to " + (a - b));
		System.out.println(a + " / " + b + " will be equal to " + (a / b));

		String name = "Daler";

		System.out.println("My name is " + name);

		System.out.println("The square root of " + a + " is " + Math.sqrt(a));

		double r = 2.5; // radius
		final double PI = 3.14;
		double areaOfCircle = PI*r*r;
		System.out.println("The area of the circile with radius " + r + " is " + areaOfCircle);

		String mixed = "I am " + 14 + " years old.";
		System.out.println(mixed);
	}
}
