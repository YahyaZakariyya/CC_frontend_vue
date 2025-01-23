<template>
  <div class="min-h-screen bg-gray-50">
    <nav class="bg-white shadow-sm sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex">
            <div class="flex-shrink-0 flex items-center">
              <h1 class="text-2xl font-bold text-gray-900">Custom Compiler Documentation</h1>
            </div>
          </div>
          <div class="flex items-center">
            <router-link
              to="/"
              class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Go to Compiler
            </router-link>
          </div>
        </div>
      </div>
    </nav>

    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div class="px-4 py-6 sm:px-0">
        <div class="bg-white shadow rounded-lg">
          <div class="px-4 py-5 sm:p-6">
            <div class="prose max-w-none">
              <h2>Language Overview</h2>
              <p>
                This is a simple programming language with basic variable declarations, conditional
                statements, and output capabilities.
              </p>

              <h3>Language Features</h3>
              <ul>
                <li><strong>Variable Declaration:</strong> Use <code>gimme</code> keyword</li>
                <li><strong>Conditional Statements:</strong> Use <code>yo</code> keyword</li>
                <li><strong>Output:</strong> Use <code>say</code> keyword</li>
              </ul>

              <h3>Syntax Examples</h3>
              <pre><code>// Variable declaration
  gimme x = 5;
  
  // Conditional statement
  yo (x < 10) {
      say "x is less than 10";
  }</code></pre>

              <h2>Compiler Phases</h2>

              <h3>1. Lexical Analysis</h3>
              <p>
                The lexer breaks down the source code into tokens using regular expressions. It
                identifies:
              </p>
              <ul>
                <li>Keywords (gimme, yo, say)</li>
                <li>Identifiers</li>
                <li>Numbers</li>
                <li>Operators</li>
                <li>Special characters</li>
              </ul>

              <h3>2. Parsing</h3>
              <p>
                The parser converts the token stream into an Abstract Syntax Tree (AST). It handles:
              </p>
              <ul>
                <li>Variable declarations</li>
                <li>Assignments</li>
                <li>Conditional statements</li>
                <li>Print statements</li>
              </ul>

              <h3>3. Interpretation</h3>
              <p>The interpreter executes the AST by:</p>
              <ul>
                <li>Managing variable scope</li>
                <li>Evaluating expressions</li>
                <li>Executing statements</li>
                <li>Handling output</li>
              </ul>

              <h2>Language Reference</h2>

              <h3>Keywords</h3>
              <ul>
                <li><code>gimme</code> - Variable declaration</li>
                <li><code>yo</code> - Conditional statement</li>
                <li><code>say</code> - Output statement</li>
              </ul>

              <h3>Operators</h3>
              <ul>
                <li><code>=</code> - Assignment</li>
                <li><code>==</code> - Equality comparison</li>
                <li><code>!=</code> - Inequality comparison</li>
                <li><code><</code> - Less than</li>
                <li><code>></code> - Greater than</li>
                <li><code><=</code> - Less than or equal</li>
                <li><code>>=</code> - Greater than or equal</li>
              </ul>

              <h3>Data Types</h3>
              <ul>
                <li>Numbers (integers)</li>
                <li>Strings (for output)</li>
              </ul>

              <h2>Examples</h2>

              <h3>Basic Program</h3>
              <pre><code>gimme x = 5;
  gimme y = 10;
  yo (x < y) {
      say "x is less than y";
  }</code></pre>

              <h3>Nested Conditions</h3>
              <pre><code>gimme score = 85;
  yo (score > 80) {
      say "Great score!";
      yo (score > 90) {
          say "Outstanding!";
      }
  }</code></pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DocumentationView',
}
</script>
