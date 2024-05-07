[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/hFs1pb0z)
# Graph Representations

Implement a function that converts an adjacency matrix to an adjacency list for
a directed unweighted graph using the template in `code.js`. Test your new
function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`. Now, the test code
does contain the solution, so you can have a look at it if you get stuck, but
try not to peek before attempting to solve it on your own.

## Runtime Analysis

What is the runtime complexity of the conversion that you implemented? Does it
depend on the number of vertices, the number of edges, or both?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

## Answer

Looking at the function you can see there are two loops. The outer loop which iterates through each row of the adjacency matrix. This correspondes to each vertex in the graph. This has a time complexity of $O(V)$ which V is the number of vertices.
The inner loop iterates throguh the columns of the current row. It checks for edges which are the values equal to 1. And the inner loop iterates through all the columns resulting in a time comlexity of $O(E)$ which E is the number of edges. This leads us to the overall time comlexity of $O(V * E)$ and in the worst case the number of edges in the graph is proportional to the number of vertices. Which can lead us to a time complexity or $O(V^{2})$. 
The runtime complexity is dependant on both the number of vertices and the number of edges. 

## Bonus

Implement a function to convert an adjacency list to an adjacency matrix and
analyze it as above.


For this assignment I reffered to my previous attempt. graph-representations-swilso59

