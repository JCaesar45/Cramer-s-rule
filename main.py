def cramersRule(matrix, constants):
    import numpy as np

    # Convert lists to numpy arrays for easier determinant calculation
    A = np.array(matrix)
    D = np.linalg.det(A)
    
    # Function to replace a column in matrix A with constants
    def replace_column(matrix, col_index, new_column):
        M = np.copy(matrix)
        M[:, col_index] = new_column
        return M
    
    # Calculate determinants for each variable
    D_w = np.linalg.det(replace_column(A, 0, constants))
    D_x = np.linalg.det(replace_column(A, 1, constants))
    D_y = np.linalg.det(replace_column(A, 2, constants))
    D_z = np.linalg.det(replace_column(A, 3, constants))
    
    # Compute the values
    w = D_w / D
    x = D_x / D
    y = D_y / D
    z = D_z / D
    
    return [w, x, y, z]
