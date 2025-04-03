---
sidebar_label: Evals
---

# Roo Code Evals System

## What is Roo Code Evals?

The Roo Code Evals System is a user-friendly testing framework that helps you evaluate how well the Roo Code AI coding assistant performs on various programming tasks. It allows you to:

- Run coding exercises across multiple programming languages (JavaScript, Python, Go, Rust, Java)
- Compare different AI models (Claude, Gemini, etc.)
- Experiment with different Roo Code settings
- Measure performance metrics like success rate, cost, and speed
- Analyze results to find the optimal configuration for your needs

## Getting Started

Setting up the Roo Code Evals system is simple with our one-step setup script:

### Prerequisites

- macOS (currently the only supported operating system)
- Visual Studio Code
- Internet connection

### Quick Setup

1. Run the setup script:
   ```bash
   ./scripts/setup.sh
   ```

2. Follow the interactive prompts to:
   - Select which programming languages you want to test (JavaScript, Python, Go, Rust, Java)
   - Install necessary tools and dependencies
   - Configure your OpenRouter API key (required to access AI models)

The setup process is automated and will take care of everything you need, including:
- Installing required tools and language environments
- Building and installing the Roo Code VSCode extension
- Setting up the database to store your results
- Configuring everything for immediate use

Once setup is complete, you'll be ready to start running evals and experimenting with different models and settings!

## Experimenting with Models and Settings

The Roo Code Evals system makes it easy to experiment with different AI models and settings to find the optimal configuration for your needs.

### Running Your First Eval

1. Start the web app:
   ```bash
   pnpm web
   ```

2. Open your browser and navigate to http://localhost:3000

3. Click the "Launch" button (rocket icon) to create a new eval run

4. Configure your experiment:
   - **Model Selection**: Choose from recommended models like Claude or Gemini, or explore other OpenRouter models
   - **Settings Configuration**: Import custom settings or use defaults (more on this below)
   - **Exercise Selection**: Run all exercises or select specific ones to focus your testing
   - **Description**: Add notes about what you're testing for future reference

5. Click "Launch" to start the evaluation

The system will automatically:
- Launch VSCode instances for each exercise
- Run the Roo Code agent on the coding tasks
- Collect performance metrics
- Run tests to verify the solutions
- Display results in the web interface

### Comparing Different Models

To compare how different AI models perform:

1. Run an eval with one model (e.g., Claude)
2. Run another eval with a different model (e.g., Gemini)
3. Compare the results in the web interface:
   - Success rates
   - Completion times
   - Token usage
   - Costs

This helps you identify which model works best for your specific coding needs.

### Command Line Usage (Advanced)

For advanced users, you can also run evals from the command line:

```bash
# Run all exercises for all languages
pnpm cli all

# Run all exercises for a specific language
pnpm cli javascript

# Run a specific exercise
pnpm cli javascript todo-app
```

## Experimenting with Custom Settings

One of the most powerful features of the Roo Code Evals system is the ability to test how different Roo Code settings affect performance.

### Exporting Settings from Roo Code

1. In VSCode with the Roo Code extension installed:
   - Open the Command Palette (Cmd+Shift+P or Ctrl+Shift+P)
   - Type "Roo Code: Export Settings"
   - Save the settings JSON file to your computer

This file contains all your current Roo Code configuration, including:
- Model preferences
- Context handling settings
- Code generation parameters
- Tool usage settings
- And many other customizable options

### Importing Settings into Evals

When creating a new eval run:
1. Click the "Import Settings" button
2. Select your exported settings JSON file
3. The system will show you a diff of how your settings differ from the defaults
4. Run the eval with these custom settings

### Comparing Settings Performance

To find the optimal settings for your workflow:
1. Run an eval with default settings
2. Export your custom settings from Roo Code
3. Run another eval with your custom settings
4. Compare the results to see which configuration performs better

This approach lets you fine-tune Roo Code to your specific needs and coding style.

## Understanding Your Results

The evals system provides easy-to-understand metrics to help you evaluate performance:

### Key Performance Indicators

- **Success Rate**: Percentage of exercises completed successfully
- **Completion Time**: How long it took to solve each exercise
- **Cost Efficiency**: How much you spent on API calls
- **Token Usage**: How efficiently the AI used its context

### Viewing and Interpreting Results

The web interface makes it easy to analyze your results:

1. **Dashboard View**: See all your runs with summary metrics
2. **Detailed Run View**: Click on a run to see performance for each exercise
3. **Console Output**: Click on an exercise to see the actual interaction with the AI

When comparing runs, look for:
- Which model has the highest success rate
- Which settings configuration completes tasks faster
- How different models balance speed vs. cost

## Quick Troubleshooting Guide

If you encounter any issues while using the Roo Code Evals system, here are some simple solutions:

### "The web app isn't starting"
- Make sure you've completed the setup process
- Try running `pnpm install` and then `pnpm web` again
- Check that port 3000 isn't being used by another application

### "My eval run isn't starting"
- Verify your OpenRouter API key is valid
- Ensure VSCode is properly installed and accessible from the command line
- Check that you have the necessary language environments installed for the exercises you're trying to run

### "The Roo Code extension isn't working"
- Make sure the extension was properly built during setup
- Try running the setup script again with the option to rebuild the extension
- Verify that VSCode can find and load the extension

### "My settings import failed"
- Make sure you're using a valid settings export from Roo Code
- Check that the JSON file isn't corrupted
- Try exporting your settings from Roo Code again

### Getting More Help

If you continue to experience issues:
- Check the console output in the terminal where you started the web app
- Look at the task console output in the web interface
- Join our community Discord for support from other users and the development team

## Happy Experimenting!

The Roo Code Evals system is designed to help you find the perfect combination of AI models and settings for your coding workflow. By experimenting with different configurations and comparing the results, you can optimize Roo Code to be an even more effective coding assistant for your specific needs.

We encourage you to try different models, adjust settings, and share your findings with the community!
