# Fast Edits

:::info Default Setting
Fast Edits (using the "Enable editing through diffs" setting) is enabled by default in Roo Code. You typically don't need to change these settings unless you encounter specific issues or want to experiment with different diff strategies.
:::

Roo Code offers an advanced setting to change how it edits files, using diffs (differences) instead of rewriting entire files. Enabling this feature provides significant benefits.

## Enable Editing Through Diffs

Open Settings by clicking the gear icon <Codicon name="gear" /> → Advanced

<img src="/img/fast-edits/fast-edits.png" alt="Roo Code settings showing Enable editing through diffs, Diff strategy dropdown, and Match precision slider" width="500" />

When **Enable editing through diffs** is checked:

1.  **Faster File Editing**: Roo modifies files more quickly by applying only the necessary changes.
2.  **Prevents Truncated Writes**: The system automatically detects and rejects attempts by the AI to write incomplete file content, which can happen with large files or complex instructions. This helps prevent corrupted files.

:::note Disabling Fast Edits
If you uncheck **Enable editing through diffs**, Roo will revert to writing the entire file content for every edit using the [`write_to_file`](/features/tools/write-to-file) tool, instead of applying targeted changes with [`apply_diff`](/features/tools/apply-diff). This full-write approach is generally slower for modifying existing files and leads to higher token usage.
:::

## Diff Strategy

This setting determines the method Roo uses to calculate and apply changes:

*   **Multi-block diff** (Default since v3.11): Allows updating multiple, separate code blocks within the same file in a single operation. More efficient for widespread changes. (Uses `MultiSearchReplaceDiffStrategy` internally).
*   **Single block**: Applies changes to one code block at a time. Reliable for most common edits. (Uses `SearchReplaceDiffStrategy` internally).
*   **Unified diff**: A more sophisticated strategy that analyzes the changes and selects the best approach, potentially using different matching techniques. (Uses `NewUnifiedDiffStrategy` internally).

Choose the strategy that best suits the complexity of the edits you typically perform. The experimental options offer potential efficiency gains but may behave differently.

## Match Precision

This slider controls how closely the code sections identified by the AI must match the actual code in your file before a change is applied.

*   **100% (Default)**: Requires an exact match. This is the safest option, minimizing the risk of incorrect changes.
*   **Lower Values (80%-99%)**: Allows for "fuzzy" matching. Roo can apply changes even if the code section has minor differences from what the AI expected. This can be useful if the file has been slightly modified, but **increases the risk** of applying changes in the wrong place.

**Use values below 100% with extreme caution.** Lower precision might be necessary occasionally, but always review the proposed changes carefully.

Internally, this setting adjusts a `fuzzyMatchThreshold` used with algorithms like Levenshtein distance to compare code similarity.

## Model Recommendation

The setting description notes that diff-based editing "Works best with the latest Claude 3.7 Sonnet model." This is likely because newer, more capable models can generate the precise diff formats required for this feature more reliably.