

#include <stdio.h>
#include <stdlib.h>

// Node structure for the Binary Search Tree
// Each node contains a key, satellite data, and pointers to its parent, left child, and right child[cite: 72].
typedef struct Node
{
    int key;
    // char* data; // Example of satellite data
    struct Node *parent;
    struct Node *left;
    struct Node *right;
} Node;

// Function to create a new node
Node *createNode(int key)
{
    Node *newNode = (Node *)malloc(sizeof(Node));
    newNode->key = key;
    newNode->parent = NULL;
    newNode->left = NULL;
    newNode->right = NULL;
    return newNode;
}

// Function to insert a node into the BST
// Based on the TREE-INSERT procedure [cite: 193-209]
void insert(Node **root, int key)
{
    Node *z = createNode(key);
    Node *y = NULL;
    Node *x = *root;

    while (x != NULL)
    {
        y = x;
        if (z->key < x->key)
        {
            x = x->left;
        }
        else
        {
            x = x->right;
        }
    }

    z->parent = y;
    if (y == NULL)
    {
        *root = z; // Tree was empty [cite: 210]
    }
    else if (z->key < y->key)
    {
        y->left = z;
    }
    else
    {
        y->right = z;
    }
}

// Helper function to search for a node with a given key
Node *search(Node *root, int key)
{
    Node *current = root;
    while (current != NULL && key != current->key)
    {
        if (key < current->key)
        {
            current = current->left;
        }
        else
        {
            current = current->right;
        }
    }
    return current;
}

// Helper function to find the minimum node in a subtree
// Based on TREE-MINIMUM [cite: 151]
Node *tree_minimum(Node *node)
{
    while (node->left != NULL)
    {
        node = node->left;
    }
    return node;
}

// Helper function to find the maximum node in a subtree
// Based on TREE-MAXIMUM [cite: 154]
Node *tree_maximum(Node *node)
{
    while (node->right != NULL)
    {
        node = node->right;
    }
    return node;
}

/**
 * @brief Prints the tree's keys in sorted order.
 * Based on the recursive algorithm INORDER-TREE-WALK[cite: 73, 75].
 * The complexity is O(n)[cite: 97].
 */
void inorder_traversal(Node *node)
{
    if (node != NULL)
    {
        inorder_traversal(node->left);  // Visit left subtree [cite: 77]
        printf("%d ", node->key);       // Print the key [cite: 77]
        inorder_traversal(node->right); // Visit right subtree [cite: 78]
    }
}

/**
 * @brief Finds the successor of a given node.
 * The successor is the node with the smallest key greater than the current node's key.
 * Based on the TREE-SUCCESSOR algorithm[cite: 157].
 */
Node *find_successor(Node *x)
{
    if (x == NULL)
        return NULL;

    // Case 1: The node has a right subtree.
    // The successor is the leftmost node in the right subtree[cite: 157, 158].
    if (x->right != NULL)
    {
        return tree_minimum(x->right);
    }

    // Case 2: The node has no right subtree.
    // The successor is the lowest ancestor whose left child is also an ancestor of x[cite: 160].
    Node *y = x->parent;
    while (y != NULL && x == y->right)
    { // Go up until we are a left child [cite: 161]
        x = y;
        y = y->parent;
    }
    return y;
}

/**
 * @brief Finds the predecessor of a given node.
 * The predecessor is the node with the largest key smaller than the current node's key.
 * This logic is symmetric to finding the successor.
 */
Node *find_predecessor(Node *x)
{
    if (x == NULL)
        return NULL;

    // Case 1: The node has a left subtree.
    // The predecessor is the rightmost node in the left subtree.
    if (x->left != NULL)
    {
        return tree_maximum(x->left);
    }

    // Case 2: The node has no left subtree.
    // The predecessor is the lowest ancestor whose right child is also an ancestor of x.
    Node *y = x->parent;
    while (y != NULL && x == y->left)
    { // Go up until we are a right child
        x = y;
        y = y->parent;
    }
    return y;
}

// Main function to demonstrate the operations
int main()
{
    Node *root = NULL;
    // Build a tree similar to the one on page 6
    int keys[] = {15, 6, 18, 3, 7, 17, 20, 2, 4, 13, 9};
    for (int i = 0; i < 11; i++)
    {
        insert(&root, keys[i]);
    }

    printf("Inorder Traversal: ");
    inorder_traversal(root);
    printf("\n\n");

    // --- Successor Examples ---
    Node *node13 = search(root, 13);
    if (node13)
    {
        Node *succ13 = find_successor(node13);
        if (succ13)
            printf("Successor of 13 is: %d\n", succ13->key); // Should be 15
    }

    Node *node7 = search(root, 7);
    if (node7)
    {
        Node *succ7 = find_successor(node7);
        if (succ7)
            printf("Successor of 7 is: %d\n", succ7->key); // Should be 9
    }

    // --- Predecessor Examples ---
    Node *node9 = search(root, 9);
    if (node9)
    {
        Node *pred9 = find_predecessor(node9);
        if (pred9)
            printf("Predecessor of 9 is: %d\n", pred9->key); // Should be 7
    }

    Node *node17 = search(root, 17);
    if (node17)
    {
        Node *pred17 = find_predecessor(node17);
        if (pred17)
            printf("Predecessor of 17 is: %d\n", pred17->key); // Should be 15
    }

    // Remember to free the allocated memory in a real application
    return 0;
}