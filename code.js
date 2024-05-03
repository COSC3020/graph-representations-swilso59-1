function convertToAdjList(adjMatrix) {
    // Initialize an array to store the adjacency list
    var adjList = [];

    // Iterate through each row of the adjacency matrix
    for (var i = 0; i < adjMatrix.length; i++) {
        // Get the current row of the adjacency matrix
        var row = adjMatrix[i];

        // Initialize an array to store connected nodes for the current row
        var connectedNodes = [];

        // Iterate through each column of the current row
        var j = 0;
        while (j < row.length) {
            // If there is an edge (value is 1), add the column index to the connected nodes
            if (row[j] === 1) {
                connectedNodes.push(j);
            }
            j++;
        }

        // Add the array of connected nodes to the adjacency list
        adjList[i] = connectedNodes;
    }

    // Return the final adjacency list
    return adjList;
}
