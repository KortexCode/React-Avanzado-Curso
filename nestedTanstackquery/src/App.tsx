import React, {StrictMode} from "react";
import { createRoot } from 'react-dom/client'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import './index.css';
import { CoursesContainer } from "./components/coursesContainer";

// Create a client
const queryClient = new QueryClient()

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container)

  root.render(
     <StrictMode>
      <QueryClientProvider client={queryClient}>
        <CoursesContainer/>
      </QueryClientProvider>
     </StrictMode>
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}


