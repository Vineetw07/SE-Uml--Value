# Multipliers Reference

All weight multipliers and hour factors used by the estimation engine.

---

## 1. UCP Model — Use Case Diagram

### 1.1 Actor Weights (UAW)

| Actor Type   | Classifier Rule                                      | Weight (pts) |
|--------------|------------------------------------------------------|:------------:|
| Simple       | Name contains `"api"`                                | **1**        |
| Average      | Name contains `"system"`, `"server"`, or `"database"`| **2**        |
| Complex      | Any other human / external actor                     | **3**        |

### 1.2 Use Case Weights (UUCW)

Classification is based on the number of transactions (edges connected to the use case node).

| Use Case Type | Transaction Count | Weight (pts) |
|---------------|-------------------|:------------:|
| Simple        | ≤ 3               | **5**        |
| Average       | 4 – 7             | **10**       |
| Complex       | ≥ 8               | **15**       |

> `UUCP = UAW + UUCW`

---

### 1.3 Technical Complexity Factor (TCF)

**Formula:** `TCF = 0.6 + (0.01 × Σ(Tᵢ × Wᵢ))`

| #  | Technical Factor (Tᵢ)             | Weight (Wᵢ) |
|----|-----------------------------------|:-----------:|
| T1 | Distributed system                | **2.0**     |
| T2 | Response time / performance       | **1.0**     |
| T3 | Online (end-user) efficiency      | **1.0**     |
| T4 | Complex internal processing       | **1.0**     |
| T5 | Reusable code                     | **1.0**     |
| T6 | Easy to install                   | **0.5**     |
| T7 | Easy to use                       | **0.5**     |
| T8 | Portability                       | **2.0**     |
| T9 | Easy to change / maintainability  | **1.0**     |
| T10| Concurrent processing             | **1.0**     |
| T11| Special security features         | **1.0**     |
| T12| Direct access for 3rd parties     | **1.0**     |
| T13| Special user training required    | **1.0**     |

> Each Tᵢ is rated **0 – 5** by the user.  
> Constant: **0.6** (base) | Coefficient: **0.01**

---

### 1.4 Environmental Complexity Factor (ECF)

**Formula:** `ECF = 1.4 + (−0.03 × Σ(Eᵢ × Wᵢ))`

| #  | Environmental Factor (Eᵢ)                        | Weight (Wᵢ) |
|----|--------------------------------------------------|:-----------:|
| E1 | Familiarity with UML / development process        | **1.5**     |
| E2 | Part-time workers involved                        | **0.5**     |
| E3 | Analyst capability                                | **1.0**     |
| E4 | Application experience                            | **0.5**     |
| E5 | Object-oriented experience of the team            | **1.0**     |
| E6 | Motivation of the team                            | **2.0**     |
| E7 | Difficult programming language                    | **−1.0**    |
| E8 | Stable requirements                               | **−1.0**    |

> Each Eᵢ is rated **0 – 5** by the user.  
> Constant: **1.4** (base) | Coefficient: **−0.03**  
> ⚠️ E7 and E8 have **negative** weights — higher ratings reduce the ECF.

---

### 1.5 Final UCP Calculation

| Formula Component  | Value / Formula                          |
|--------------------|------------------------------------------|
| UUCP               | UAW + UUCW                               |
| TCF                | 0.6 + (0.01 × Σ TᵢWᵢ)                   |
| ECF                | 1.4 + (−0.03 × Σ EᵢWᵢ)                  |
| UCP                | UUCP × TCF × ECF                         |
| Estimated Hours    | UCP × **20** hours/point                 |
| Total Cost         | Estimated Hours × Hourly Rate (user-set) |

---

## 2. Graph Weight Model — Class Diagram

**Formula:** `Estimated Hours = (Classes × 10) + (Attributes × 2) + (Methods × 4) + (Relationships × 3)`

| Element Type | Hour Factor (hrs/element) |
|--------------|:-------------------------:|
| Class (node) | **10**                    |
| Attribute    | **2**                     |
| Method       | **4**                     |
| Relationship (edge) | **3**             |

| Formula Component | Value / Formula                             |
|-------------------|---------------------------------------------|
| Estimated Hours   | (C × 10) + (A × 2) + (M × 4) + (R × 3)    |
| Total Cost        | Estimated Hours × Hourly Rate (user-set)    |

> No TCF/ECF factors are applied to the Graph Weight model.  
> It is a purely structural count-based estimation.

---

## 3. Supported Relationship Types (Class Diagram Parser)

The following XML tags are recognized and counted as relationships:

- `<Association>`
- `<Dependency>`
- `<Generalization>`
- `<Realization>`
- `<Aggregation>`
- `<Composition>`
- `<Relationship>`
