```markdown
# Cramer's Rule Matrix Solver

## Project Overview

This project is a fully client-side, determinant-based linear equation solver implemented with **pure HTML, CSS, and advanced JavaScript**. It applies **Cramer's Rule** to solve square systems of linear equations with a unique solution.

The application is designed to demonstrate:
- Mathematical correctness
- Algorithmic rigor
- Clean, modular JavaScript
- Professional UI/UX suitable for technical interviews
- Zero external dependencies

The current implementation supports **4×4 systems**, easily extensible to other dimensions.

---

## Mathematical Foundation

Given a system of linear equations:

``

A · x = b

``

Where:
- `A` is an `n × n` coefficient matrix
- `x` is the unknown variable vector
- `b` is the constant vector

If `det(A) ≠ 0`, Cramer's Rule guarantees a **unique solution**:

``

xᵢ = det(Aᵢ) / det(A)

``

Where `Aᵢ` is the matrix formed by replacing column `i` of `A` with vector `b`.

This project implements:
- Recursive determinant calculation using cofactor expansion
- Column substitution for each variable
- Exact numerical resolution using native JavaScript arithmetic

---

## Features

- Determinant computation for any square matrix
- Fully functional Cramer's Rule solver
- Interactive matrix and vector input
- Clear handling of singular matrices (`det = 0`)
- Modern, responsive UI
- Zero libraries, zero frameworks
- Separation of concerns (HTML / CSS / JS)

---

## Project Structure

``

/cramers-rule-solver
│
├── index.html     # Application structure and semantic markup
├── styles.css     # Modern UI styling and layout
├── advanced.js      # Determinant logic and Cramer's Rule engine
└── README.md      # Project documentation

``

---

## How It Works (Execution Flow)

1. User enters coefficients into the matrix grid
2. User enters constants into the vector grid
3. JavaScript constructs:
   - Coefficient matrix `A.`
   - Constants vector `b.`
4. Determinant of `A` is computed recursively
5. Each variable determinant is computed via column substitution
6. Solutions are displayed numerically
7. If `det(A) = 0`, the system is declared unsolvable by Cramer's Rule

---

## Core Algorithms

### Determinant Calculation
- Recursive cofactor expansion
- Handles all square matrix sizes
- Optimized base cases for 1×1 and 2×2 matrices

### Cramer's Rule Solver
- Matrix cloning with column replacement
- Division by the main determinant
- Guaranteed correctness when the determinant is non-zero

---

## Technical Highlights

- No floating-point shortcuts or heuristics
- Deterministic output
- Immutable data transformations
- Clean functional decomposition
- Browser-native performance
- Interview-ready code clarity

---

## Browser Compatibility

Tested and functional in:
- Chrome
- Firefox
- Edge
- Safari

No polyfills required.

---

## Extensibility

The system can be extended to:
- Dynamic matrix sizing
- Fractional/symbolic output
- Step-by-step determinant visualization
- Performance optimization via LU decomposition
- Educational animation layers

---

## Intended Use

- Technical interviews
- Portfolio demonstration
- Mathematical visualization
- Algorithm explanation
- Linear algebra learning tools

---

## Author Intent

This project is intentionally implemented **without frameworks** to demonstrate:
- Core JavaScript mastery
- Algorithmic thinking
- Mathematical correctness
- Professional frontend craftsmanship

---

## License

MIT License  
Free to use, modify, and distribute.

---

## Status

Production-ready  
No known defects  
Deterministic behavior confirmed
```
