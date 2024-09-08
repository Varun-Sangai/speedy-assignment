## Streamify Dashboard

### Overview

This project was built as part of an assignment to develop a dashboard for a music platform called Streamify. The goal was to create a user-friendly and responsive interface that provides management with insights into user activity, revenue, and content performance. The dashboard includes charts, tables, and cards to present key metrics, all while maintaining a cohesive and clean design.

### Thought Process

**Tackling Complexity**

When first analyzing the assignment, it became clear that a complex layout was required, combining various elements like charts, tables, and statistical cards. While each individual component seemed manageable, the real challenge lay in ensuring a responsive layout that worked seamlessly across different screen sizes. This led to the decision to manually control the layout, giving more flexibility and precision in handling responsiveness, rather than relying heavily on third-party libraries for layout management.

**Data and API Setup**

To simulate real-world data, 50 users, 10 artists, and 50 songs were generated using AI tools. This data was served through JSON-server, which provided a simple mock backend. Given the limitations of JSON-server’s relationship handling, the data structure was kept straightforward to ensure reliable performance. Before delving into the UI, it was crucial to verify that the API endpoints would return the necessary data. After testing the API calls to ensure smooth communication, the foundation was set for building the dashboard.

**Designing the User Interface**

The project was initialized using Vite, TypeScript, and Tailwind CSS, offering fast development, type safety, and flexible styling. The overall design aimed to balance simplicity and functionality, ensuring the dashboard was visually appealing without overwhelming the user.

For smaller UI elements like skeleton loaders, text input fields, and tables, MUI was used due to its collection of highly customizable and well-structured components. To enhance the visual appeal and interactivity, Tabler Icons were integrated for displaying icons throughout the dashboard.

**Charts and Data Visualization**

When it came to the charts, ApexCharts was selected for its versatility and customization options. The dashboard required three different chart types: pie, bar, and line charts, each serving a distinct purpose in presenting key data. The bar chart displays the most-streamed songs, with the flexibility to adjust how many songs are shown on the graph. Hovering over the bars provides additional details about each song.

A line chart illustrates user and active user growth over the past 12 months. This chart includes zoom functionality and hover effects to display detailed data points, giving users a clear understanding of platform engagement trends.

The pie chart highlights revenue distribution between subscriptions and advertisements. Interaction with the pie chart triggers changes in the recent streams table, allowing users to filter streams based on the selected revenue category.

**Building Responsiveness and Functionality**

The entire layout was manually controlled to maintain full responsiveness, especially given the complexity of integrating multiple charts, cards, and tables. Instead of relying on MUI’s layout components, which could complicate responsiveness, the decision to handle layout design directly allowed greater flexibility. This approach ensured that all dashboard components—from the four top-level stats cards to the charts and recent streams table—fit neatly on any screen size.

**User Experience Enhancements**

To optimize the user experience, skeleton loading was implemented, ensuring a smooth transition when data is being fetched. This is particularly important when using a free hosting plan for JSON-server, where response times may vary.

Redux was introduced to manage the state of specific features, particularly for filtering recent streams based on revenue distribution. This integration demonstrates familiarity with modern state management techniques while improving data consistency across the dashboard.

**Functionality Breakdown**

• At the top, four cards provide a snapshot of key metrics: total users, active users, total revenue, and total streams. A fifth card is positioned alongside the bar chart to maintain a balanced and visually 
  appealing layout.

• Below the cards, a bar chart showcases the most-streamed songs. Users can interact with the dropdown to change the number of songs displayed (default is 7). Hovering over the chart provides additional details 
  about each bar.

• The line chart tracks user and active user growth over 12 months. It offers zoom functionality and hover interactions for more detailed insights.

• A pie chart visualizes revenue distribution, with interactions filtering the recent streams table by users contributing to subscription or advertisement revenue.

• The recent streams table is sortable by stream count and includes pagination. A search bar with debouncing minimizes unnecessary API calls, enhancing performance.

### Tech Stack

• React: For building the user interface

• Vite: For fast, optimized development

• TypeScript: For static typing and code reliability

• Tailwind CSS: To efficiently style the application

• MUI: For smaller components like skeletons, inputs, and tables

• ApexCharts: For data visualization (pie, bar, and line charts)

• JSON-server: To simulate API responses for mock data

• Redux: For managing state related to revenue and streams

• Tabler Icons: For displaying icons throughout the dashboard

### Installation

To run the project locally:

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

