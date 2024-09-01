# Subscription Manager

**Subscription Manager** is a subscription management application built using Next.js and React, following the SOLID principles to ensure scalable and maintainable code. The app allows users to add, list, and manage subscriptions with a modern, responsive interface.

## Principles Used

The application adheres to the SOLID principles, which are:

- **Single Responsibility Principle (SRP)**: Each class and module in the codebase has a single responsibility. For example, the `SubscriptionService` handles subscription-related business logic, while the `PersistenceService` is responsible for data storage.

- **Open/Closed Principle (OCP)**: The code is designed to be open for extension but closed for modification. This is achieved by using interfaces and abstract classes, allowing new features or changes without altering existing code.

- **Liskov Substitution Principle (LSP)**: Derived classes can be substituted for their base classes without affecting the correctness of the program. This ensures that extending functionality does not break existing code.

- **Interface Segregation Principle (ISP)**: Interfaces are designed to be specific to the needs of the clients. For instance, `ISubscriptionService` and `IPersistenceService` provide specific methods for subscription management and data persistence, respectively, avoiding the pitfalls of a large, monolithic interface.

- **Dependency Inversion Principle (DIP)**: High-level modules are not dependent on low-level modules but rather on abstractions. The `SubscriptionService` depends on the `IPersistenceService` interface rather than a concrete implementation, promoting flexibility and easier testing.

## Technologies Used

- **Next.js**: Framework for server-side rendering and building web applications.
- **React**: Library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for fast and efficient styling.
- **Jest**: Testing framework for ensuring code quality.
- **Testing Library**: Utilities for testing React components.

## Project Structure

- **/pages**: Contains Next.js pages.
- **/components**: Reusable components used across the application.
- **/contexts**: React contexts for providing services and managing state.
- **/hooks**: Custom hooks for handling business logic and state management.
- **/models**: Types and interfaces defining data structures.
- **/services**: Implementations of services for managing data and business logic.

## Testing

The project includes tests written with Jest and Testing Library to ensure functionality and reliability.

To run the tests, use the following command:

```bash
npm test
```
