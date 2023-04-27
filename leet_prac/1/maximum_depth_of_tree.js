/**
 * Maximum depth of binary tree
 */

/**
 * Very Constraint
 * What do we do if the tree is empty
 * -> return Zero(0)
 * What do we do if it's just one node
 * -> Return Node
 */

const maxDepth = function(node, currentDepth){
    if(!node){
        return currentDepth
    }
    currentDepth++
    return Math.max(maxDepth(node.left, currentDepth), maxDepth(node.right, currentDepth))
}
