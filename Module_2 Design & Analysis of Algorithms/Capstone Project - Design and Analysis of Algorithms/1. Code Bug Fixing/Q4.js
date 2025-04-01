/*
To solve the problem of sorting names based on their corresponding heights, we need to 
sort the names in descending order based on the heights. The approach involves creating a 
mapping between heights and names, then sorting based on the heights and rearranging the 
names accordingly.

Solution
1. Map Heights to Names: Create a mapping of heights to names.
2. Sort Heights in Descending Order: Sort the heights in descending order.
3. Retrieve Names Based on Sorted Heights: Use the sorted heights to retrieve names 
   in the correct order.
*/

// Implementation

function sortPeople(names, heights) {
  // Create an array of objects where each object has a name and height
  const people = names.map((name, index) => ({ name, height: heights[index] }));
  
  // Sort the array of objects by height in descending order
  people.sort((a, b) => b.height - a.height);
  
  // Extract the names from the sorted array
  return people.map(person => person.name);
}

/*
Explanation

1. Create Array of Objects:
- Use map to create an array of objects where each object contains name and height.
  
2. Sort by Height:
- Use sort with a comparison function (a, b) => b.height - a.height to sort the array in descending order based on height.

3. Extract Names:
- Use map again to extract just the names from the sorted array.

Examples

1. Example 1: 
const names = ["Mary", "John", "Emma"];
const heights = [180, 165, 170];
console.log(sortPeople(names, heights)); // Output: ["Mary", "Emma", "John"]


2. Example 2: 
const names = ["Alice", "Bob", "Bob"];
const heights = [155, 185, 150];
console.log(sortPeople(names, heights)); // Output: ["Bob", "Alice", "Bob"]


3. Example 3:
const names = ["Sarah", "David", "Lily"];
const heights = [155, 160, 150];
console.log(sortPeople(names, heights)); // Output: ["David", "Sarah", "Lily"]


Complexity
- Time Complexity: O(n log n), where n is the number of participants, due to the sorting 
  operation.
- Space Complexity: O(n), for storing the array of objects.


*/