<template>
  <div class="container mx-auto px-6 py-8">
    <!-- Header -->
    <h1 class="text-4xl font-bold text-gray-800 mb-6">MinLang Documentation</h1>

    <!-- Overview Section -->
    <section class="mb-8">
      <h2 class="text-3xl font-semibold text-gray-700 mb-4">Language Overview</h2>
      <p class="text-gray-600 text-lg leading-relaxed">
        MinLang is a simple programming language designed for variable declarations,
        conditional statements, loops, and basic output. This documentation outlines its
        core syntax, compiler phases, and operational semantics.
      </p>
    </section>

    <!-- Language Features -->
    <section class="mb-8">
      <h2 class="text-3xl font-semibold text-gray-700 mb-4">Language Features</h2>
      <div class="bg-white shadow-md rounded-lg p-6">
        <ul class="list-disc list-inside text-gray-600 space-y-2">
          <li><strong>Variable Declaration:</strong> Use the <code class="text-blue-600">gimme</code> keyword.</li>
          <li><strong>Conditional Statements:</strong> Use the <code class="text-blue-600">yo</code> and <code class="text-blue-600">nah</code> keywords.</li>
          <li><strong>Loops:</strong> Use the <code class="text-blue-600">keepdoing</code> keyword for while loops.</li>
          <li><strong>Output:</strong> Use the <code class="text-blue-600">say</code> keyword.</li>
        </ul>
      </div>
    </section>

    <!-- Compiler Phases -->
    <section class="mb-8">
      <h2 class="text-3xl font-semibold text-gray-700 mb-4">Compiler Phases</h2>
      <div class="bg-white shadow-md rounded-lg p-6">
        <table class="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th class="border border-gray-300 px-4 py-2 text-left text-gray-700">Phase</th>
              <th class="border border-gray-300 px-4 py-2 text-left text-gray-700">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-gray-300 px-4 py-2">Lexical Analysis</td>
              <td class="border border-gray-300 px-4 py-2">
                Converts the source code into tokens. Supported token types include:
                <ul class="list-disc list-inside mt-2">
                  <li><strong>KEYWORD:</strong> gimme, yo, keepdoing, say, nah</li>
                  <li><strong>IDENTIFIER:</strong> Variables</li>
                  <li><strong>NUMBER:</strong> Integer literals</li>
                  <li><strong>COMPOP:</strong> Comparison operators (e.g., ==, !=, >, <)</li>
                  <li><strong>STRING:</strong> Text literals enclosed in double quotes</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2">Parsing</td>
              <td class="border border-gray-300 px-4 py-2">
                Constructs an Abstract Syntax Tree (AST) from tokens. Key nodes include:
                <ul class="list-disc list-inside mt-2">
                  <li><strong>Declaration:</strong> Variable declarations</li>
                  <li><strong>Condition:</strong> If-else statements</li>
                  <li><strong>Loop:</strong> While loops</li>
                  <li><strong>Expression:</strong> Arithmetic and logical operations</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2">Symbol Table Management</td>
              <td class="border border-gray-300 px-4 py-2">
                Manages variable declarations, assignments, and lookups. Throws errors for:
                <ul class="list-disc list-inside mt-2">
                  <li>Using undeclared variables</li>
                  <li>Redeclaring existing variables</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2">Interpretation</td>
              <td class="border border-gray-300 px-4 py-2">
                Executes the AST by evaluating conditions, performing operations, and generating output.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- Grammar Rules -->
    <section class="mb-8">
      <h2 class="text-3xl font-semibold text-gray-700 mb-4">Grammar Rules</h2>
      <div class="bg-white shadow-md rounded-lg p-6">
        <ul class="list-decimal list-inside text-gray-600">
          <li><code>stmt → VAR_DECL | COND_STMT | PRINT_STMT | LOOP</code></li>
          <li><code>VAR_DECL → "gimme" IDENTIFIER "=" EXPR</code></li>
          <li><code>COND_STMT → "yo" "(" COND ")" "{" STMTS "}" ["nah" "{" STMTS "}"]</code></li>
          <li><code>PRINT_STMT → "say" STRING_LITERAL</code></li>
          <li><code>LOOP → "keepdoing" "(" COND ")" "{" STMTS "}"</code></li>
          <li><code>EXPR → TERM {OP TERM}</code></li>
        </ul>
      </div>
    </section>

    <!-- Example Programs -->
    <section>
      <h2 class="text-3xl font-semibold text-gray-700 mb-4">Example Programs</h2>
      <div class="bg-white shadow-md rounded-lg p-6">
        <pre class="bg-gray-100 p-4 rounded text-gray-800">
<code>gimme x = 10;
gimme y = 20;
yo (x < y) {
  say "x is less than y";
} nah {
  say "x is not less than y";
}
</code>
        </pre>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "DocumentationView",
};
</script>

<style>
/* Additional Tailwind-based styling can be added if necessary */
</style>
