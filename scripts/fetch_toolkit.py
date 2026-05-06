import urllib.request
import os
import shutil

BASE = '/home/runner/work/mymarketingpro-vue/mymarketingpro-vue'

SUBSTITUTIONS = [
    # PM_ISSUE_KEY must be first to prevent inner {{number}} being replaced
    ('{{PM_ISSUE_KEY}}', '#{{number}}'),
    ('{{PROJECT_NAME}}', 'mymarketingpro-vue'),
    ('{{PROJECT_DESCRIPTION}}', 'Vue 3 plugin for MyMarketingPro.com — provides components, composables, and utilities for integrating with the MyMarketingPro platform API.'),
    ('{{FRAMEWORK}}', 'Vue 3'),
    ('{{LANGUAGE}}', 'TypeScript'),
    ('{{STYLING}}', 'CSS / SCSS'),
    ('{{PACKAGE_MANAGER}}', 'npm'),
    ('{{NODE_VERSION}}', '18+'),
    ('{{REPO_URL}}', 'https://github.com/ninjasitm/mymarketingpro-vue'),
    ('{{DEV_PORT}}', '5173'),
    ('{{SRC_STRUCTURE}}', 'src/\n│   ├── index.ts\n│   ├── plugin.ts\n│   ├── components/\n│   ├── composables/\n│   ├── services/\n│   ├── types/\n│   └── utils/\n├── tests/\n├── docs/'),
    ('{{LICENSE_TYPE}}', 'MIT'),
    ('{{DATABASE}}', 'N/A'),
    ('{{TEST_FRAMEWORK}}', 'Vitest'),
    ('{{BUILD_TOOL}}', 'Vite'),
    ('{{ISSUE_TRACKER}}', 'GitHub Issues'),
    ('{{PM_URL}}', 'https://github.com/ninjasitm/mymarketingpro-vue/issues'),
    ('{{PROJECT_KEY}}', 'mymarketingpro-vue'),
    ('{{INSTALL_COMMAND}}', 'npm install'),
    ('{{DEV_COMMAND}}', 'npm run dev'),
    ('{{BUILD_COMMAND}}', 'npm run build'),
    ('{{TEST_COMMAND}}', 'npm run test'),
    ('{{LINT_COMMAND}}', 'npm run lint'),
    ('{{SRC_DIR}}', 'src'),
    ('{{TEST_DIR}}', 'tests'),
    ('{{FILE_EXTENSION}}', 'ts'),
    ('{{DEFAULT_BRANCH}}', 'main'),
    ('{{ENTRY_POINT}}', 'src/index.ts'),
    ('{{PROJECT_STRUCTURE}}', 'src/\n│   ├── index.ts\n│   ├── plugin.ts\n│   ├── components/\n│   ├── composables/\n│   ├── services/\n│   ├── types/\n│   └── utils/\n├── tests/\n├── docs/'),
]

def substitute(content):
    for placeholder, value in SUBSTITUTIONS:
        content = content.replace(placeholder, value)
    return content

FILES = [
    # Core docs
    ('https://raw.githubusercontent.com/ninjasitm/ai-assisted-dev-toolkit/main/src/repo/AGENTS.md', 'AGENTS.md'),
    ('https://raw.githubusercontent.com/ninjasitm/ai-assisted-dev-toolkit/main/src/repo/CLAUDE.md', 'CLAUDE.md'),
    ('https://raw.githubusercontent.com/ninjasitm/ai-assisted-dev-toolkit/main/src/repo/README.md', 'README.md'),
    ('https://raw.githubusercontent.com/ninjasitm/ai-assisted-dev-toolkit/main/src/repo/.mcp.json', '.mcp.json'),
    # GitHub copilot
    ('https://raw.githubusercontent.com/ninjasitm/ai-assisted-dev-toolkit/main/src/repo/.github/copilot-instructions.md', '.github/copilot-instructions.md'),
    ('https://raw.githubusercontent.com/ninjasitm/ai-assisted-dev-toolkit/main/src/repo/.github/instructions/agent-conduct.instructions.md', '.github/instructions/agent-conduct.instructions.md'),
    ('https://raw.githubusercontent.com/ninjasitm/ai-assisted-dev-toolkit/main/src/repo/.github/instructions/coding-standards.instructions.md', '.github/instructions/coding-standards.instructions.md'),
    ('https://raw.githubusercontent.com/ninjasitm/ai-assisted-dev-toolkit/main/src/repo/.github/instructions/deployment.instructions.md', '.github/instructions/deployment.instructions.md'),
    ('https://raw.githubusercontent.com/ninjasitm/ai-assisted-dev-toolkit/main/src/repo/.github/instructions/documentation.instructions.md', '.github/instructions/documentation.instructions.md'),
    ('https://raw.githubusercontent.com/ninjasitm/ai-assisted-dev-toolkit/main/src/repo/.github/instructions/logging.instructions.md', '.github/instructions/logging.instructions.md'),
    ('https://raw.githubusercontent.com/ninjasitm/ai-assisted-dev-toolkit/main/src/repo/.github/instructions/patterns.instructions.md', '.github/instructions/patterns.instructions.md'),
    ('https://raw.githubusercontent.com/ninjasitm/ai-assisted-dev-toolkit/main/src/repo/.github/instructions/project-context.instructions.md', '.github/instructions/project-context.instructions.md'),
    ('https://raw.githubusercontent.com/ninjasitm/ai-assisted-dev-toolkit/main/src/repo/.github/instructions/subagent-workflow.instructions.md', '.github/instructions/subagent-workflow.instructions.md'),
    ('https://raw.githubusercontent.com/ninjasitm/ai-assisted-dev-toolkit/main/src/repo/.github/instructions/testing.instructions.md', '.github/instructions/testing.instructions.md'),
    ('https://raw.githubusercontent.com/ninjasitm/ai-assisted-dev-toolkit/main/src/repo/.github/instructions/workflows.instructions.md', '.github/instructions/workflows.instructions.md'),
    # GitHub agents
    ('https://raw.githubusercontent.com/ninjasitm/ai-assisted-dev-toolkit/main/src/repo/.github/agents/admin-portal.agent.md', '.github/agents/admin-portal.agent.md'),
    ('https://raw.githubusercontent.com/ninjasitm/ai-assisted-dev-toolkit/main/src/repo/.github/agents/api-specialist.agent.md', '.github/agents/api-specialist.agent.md'),
    ('https://raw.githubusercontent.com/ninjasitm/ai-assisted-dev-toolkit/main/src/repo/.github/agents/backend-architect.agent.md', '.github/agents/backend-architect.agent.md'),
    ('https://raw.githubusercontent.com/ninjasitm/ai-assisted-dev-toolkit/main/src/repo/.github/agents/documenter.agent.md', '.github/agents/documenter.agent.md'),
    ('https://raw.githubusercontent.com/ninjasitm/ai-assisted-dev-toolkit/main/src/repo/.github/agents/feature-builder.agent.md', '.github/agents/feature-builder.agent.md'),
    ('https://raw.githubusercontent.com/ninjasitm/ai-assisted-dev-toolkit/main/src/repo/.github/agents/frontend-developer.agent.md', '.github/agents/frontend-developer.agent.md'),
    ('https://raw.githubusercontent.com/ninjasitm/ai-assisted-dev-toolkit/main/src/repo/.github/agents/green.agent.md', '.github/agents/green.agent.md'),
    ('https://raw.githubusercontent.com/ninjasitm/ai-assisted-dev-toolkit/main/src/repo/.github/agents/implementer.agent.md', '.github/agents/implementer.agent.md'),
    ('https://raw.githubusercontent.com/ninjasitm/ai-assisted-dev-toolkit/main/src/repo/.github/agents/planner.agent.md', '.github/agents/planner.agent.md'),
    ('https://raw.githubusercontent.com/ninjasitm/ai-assisted-dev-toolkit/main/src/repo/.github/agents/red.agent.md', '.github/agents/red.agent.md'),
    ('https://raw.githubusercontent.com/ninjasitm/ai-assisted-dev-toolkit/main/src/repo/.github/agents/refactor.agent.md', '.github/agents/refactor.agent.md'),
    ('https://raw.githubusercontent.com/ninjasitm/ai-assisted-dev-toolkit/main/src/repo/.github/agents/researcher.agent.md', '.github/agents/researcher.agent.md'),
    ('https://raw.githubusercontent.com/ninjasitm/ai-assisted-dev-toolkit/main/src/repo/.github/agents/reviewer.agent.md', '.github/agents/reviewer.agent.md'),
    ('https://raw.githubusercontent.com/ninjasitm/ai-assisted-dev-toolkit/main/src/repo/.github/agents/tdd.agent.md', '.github/agents/tdd.agent.md'),
    # GitHub prompts
    ('https://raw.githubusercontent.com/ninjasitm/ai-assisted-dev-toolkit/main/src/repo/.github/prompts/assign-tasks.prompt.md', '.github/prompts/assign-tasks.prompt.md'),
    ('https://raw.githubusercontent.com/ninjasitm/ai-assisted-dev-toolkit/main/src/repo/.github/prompts/bootstrap-patch.prompt.md', '.github/prompts/bootstrap-patch.prompt.md'),
    ('https://raw.githubusercontent.com/ninjasitm/ai-assisted-dev-toolkit/main/src/repo/.github/prompts/commit-push.prompt.md', '.github/prompts/commit-push.prompt.md'),
    ('https://raw.githubusercontent.com/ninjasitm/ai-assisted-dev-toolkit/main/src/repo/.github/prompts/create-skill.prompt.md', '.github/prompts/create-skill.prompt.md'),
    ('https://raw.githubusercontent.com/ninjasitm/ai-assisted-dev-toolkit/main/src/repo/.github/prompts/implement-feature.prompt.md', '.github/prompts/implement-feature.prompt.md'),
    ('https://raw.githubusercontent.com/ninjasitm/ai-assisted-dev-toolkit/main/src/repo/.github/prompts/implement-fixes.prompt.md', '.github/prompts/implement-fixes.prompt.md'),
    ('https://raw.githubusercontent.com/ninjasitm/ai-assisted-dev-toolkit/main/src/repo/.github/prompts/plan.prompt.md', '.github/prompts/plan.prompt.md'),
    ('https://raw.githubusercontent.com/ninjasitm/ai-assisted-dev-toolkit/main/src/repo/.github/prompts/playwright-test.prompt.md', '.github/prompts/playwright-test.prompt.md'),
    ('https://raw.githubusercontent.com/ninjasitm/ai-assisted-dev-toolkit/main/src/repo/.github/prompts/release-notes.prompt.md', '.github/prompts/release-notes.prompt.md'),
    ('https://raw.githubusercontent.com/ninjasitm/ai-assisted-dev-toolkit/main/src/repo/.github/prompts/review-pr.prompt.md', '.github/prompts/review-pr.prompt.md'),
    ('https://raw.githubusercontent.com/ninjasitm/ai-assisted-dev-toolkit/main/src/repo/.github/prompts/review-staged.prompt.md', '.github/prompts/review-staged.prompt.md'),
    ('https://raw.githubusercontent.com/ninjasitm/ai-assisted-dev-toolkit/main/src/repo/.github/prompts/review.prompt.md', '.github/prompts/review.prompt.md'),
    ('https://raw.githubusercontent.com/ninjasitm/ai-assisted-dev-toolkit/main/src/repo/.github/prompts/specify.prompt.md', '.github/prompts/specify.prompt.md'),
    ('https://raw.githubusercontent.com/ninjasitm/ai-assisted-dev-toolkit/main/src/repo/.github/prompts/tasks.prompt.md', '.github/prompts/tasks.prompt.md'),
    # Cursor rules
    ('https://raw.githubusercontent.com/ninjasitm/ai-assisted-dev-toolkit/main/src/repo/.cursor/rules/agent-conduct.mdc', '.cursor/rules/agent-conduct.mdc'),
    ('https://raw.githubusercontent.com/ninjasitm/ai-assisted-dev-toolkit/main/src/repo/.cursor/rules/api-server.mdc', '.cursor/rules/api-server.mdc'),
    ('https://raw.githubusercontent.com/ninjasitm/ai-assisted-dev-toolkit/main/src/repo/.cursor/rules/coding-standards.mdc', '.cursor/rules/coding-standards.mdc'),
    ('https://raw.githubusercontent.com/ninjasitm/ai-assisted-dev-toolkit/main/src/repo/.cursor/rules/composition-api-component-structure.mdc', '.cursor/rules/composition-api-component-structure.mdc'),
    ('https://raw.githubusercontent.com/ninjasitm/ai-assisted-dev-toolkit/main/src/repo/.cursor/rules/core-libraries.mdc', '.cursor/rules/core-libraries.mdc'),
    ('https://raw.githubusercontent.com/ninjasitm/ai-assisted-dev-toolkit/main/src/repo/.cursor/rules/environment-tooling.mdc', '.cursor/rules/environment-tooling.mdc'),
    ('https://raw.githubusercontent.com/ninjasitm/ai-assisted-dev-toolkit/main/src/repo/.cursor/rules/logging-comments.mdc', '.cursor/rules/logging-comments.mdc'),
    ('https://raw.githubusercontent.com/ninjasitm/ai-assisted-dev-toolkit/main/src/repo/.cursor/rules/logging.mdc', '.cursor/rules/logging.mdc'),
    ('https://raw.githubusercontent.com/ninjasitm/ai-assisted-dev-toolkit/main/src/repo/.cursor/rules/project-context.mdc', '.cursor/rules/project-context.mdc'),
    ('https://raw.githubusercontent.com/ninjasitm/ai-assisted-dev-toolkit/main/src/repo/.cursor/rules/subagent-workflow.mdc', '.cursor/rules/subagent-workflow.mdc'),
    ('https://raw.githubusercontent.com/ninjasitm/ai-assisted-dev-toolkit/main/src/repo/.cursor/rules/testing-quality.mdc', '.cursor/rules/testing-quality.mdc'),
    ('https://raw.githubusercontent.com/ninjasitm/ai-assisted-dev-toolkit/main/src/repo/.cursor/rules/ui-accessibility.mdc', '.cursor/rules/ui-accessibility.mdc'),
    ('https://raw.githubusercontent.com/ninjasitm/ai-assisted-dev-toolkit/main/src/repo/.cursor/rules/version-control.mdc', '.cursor/rules/version-control.mdc'),
    ('https://raw.githubusercontent.com/ninjasitm/ai-assisted-dev-toolkit/main/src/repo/.cursor/rules/what-to-avoid.mdc', '.cursor/rules/what-to-avoid.mdc'),
    ('https://raw.githubusercontent.com/ninjasitm/ai-assisted-dev-toolkit/main/src/repo/.cursor/mcp.json', '.cursor/mcp.json'),
    # Skills
    ('https://raw.githubusercontent.com/ninjasitm/ai-assisted-dev-toolkit/main/src/repo/.agents/skills/brainstorming/SKILL.md', '.agents/skills/brainstorming/SKILL.md'),
    ('https://raw.githubusercontent.com/ninjasitm/ai-assisted-dev-toolkit/main/src/repo/.agents/skills/dispatching-parallel-agents/SKILL.md', '.agents/skills/dispatching-parallel-agents/SKILL.md'),
    ('https://raw.githubusercontent.com/ninjasitm/ai-assisted-dev-toolkit/main/src/repo/.agents/skills/executing-plans/SKILL.md', '.agents/skills/executing-plans/SKILL.md'),
    ('https://raw.githubusercontent.com/ninjasitm/ai-assisted-dev-toolkit/main/src/repo/.agents/skills/finishing-a-development-branch/SKILL.md', '.agents/skills/finishing-a-development-branch/SKILL.md'),
    ('https://raw.githubusercontent.com/ninjasitm/ai-assisted-dev-toolkit/main/src/repo/.agents/skills/gh-cli/SKILL.md', '.agents/skills/gh-cli/SKILL.md'),
    ('https://raw.githubusercontent.com/ninjasitm/ai-assisted-dev-toolkit/main/src/repo/.agents/skills/issue-tracker/SKILL.md', '.agents/skills/issue-tracker/SKILL.md'),
    ('https://raw.githubusercontent.com/ninjasitm/ai-assisted-dev-toolkit/main/src/repo/.agents/skills/logging/SKILL.md', '.agents/skills/logging/SKILL.md'),
    ('https://raw.githubusercontent.com/ninjasitm/ai-assisted-dev-toolkit/main/src/repo/.agents/skills/project-documentation/SKILL.md', '.agents/skills/project-documentation/SKILL.md'),
    ('https://raw.githubusercontent.com/ninjasitm/ai-assisted-dev-toolkit/main/src/repo/.agents/skills/receiving-code-review/SKILL.md', '.agents/skills/receiving-code-review/SKILL.md'),
    ('https://raw.githubusercontent.com/ninjasitm/ai-assisted-dev-toolkit/main/src/repo/.agents/skills/requesting-code-review/SKILL.md', '.agents/skills/requesting-code-review/SKILL.md'),
    ('https://raw.githubusercontent.com/ninjasitm/ai-assisted-dev-toolkit/main/src/repo/.agents/skills/subagent-driven-development/SKILL.md', '.agents/skills/subagent-driven-development/SKILL.md'),
    ('https://raw.githubusercontent.com/ninjasitm/ai-assisted-dev-toolkit/main/src/repo/.agents/skills/systematic-debugging/SKILL.md', '.agents/skills/systematic-debugging/SKILL.md'),
    ('https://raw.githubusercontent.com/ninjasitm/ai-assisted-dev-toolkit/main/src/repo/.agents/skills/test-driven-development/SKILL.md', '.agents/skills/test-driven-development/SKILL.md'),
    ('https://raw.githubusercontent.com/ninjasitm/ai-assisted-dev-toolkit/main/src/repo/.agents/skills/using-git-worktrees/SKILL.md', '.agents/skills/using-git-worktrees/SKILL.md'),
    ('https://raw.githubusercontent.com/ninjasitm/ai-assisted-dev-toolkit/main/src/repo/.agents/skills/using-superpowers/SKILL.md', '.agents/skills/using-superpowers/SKILL.md'),
    ('https://raw.githubusercontent.com/ninjasitm/ai-assisted-dev-toolkit/main/src/repo/.agents/skills/verification-before-completion/SKILL.md', '.agents/skills/verification-before-completion/SKILL.md'),
    ('https://raw.githubusercontent.com/ninjasitm/ai-assisted-dev-toolkit/main/src/repo/.agents/skills/writing-plans/SKILL.md', '.agents/skills/writing-plans/SKILL.md'),
    ('https://raw.githubusercontent.com/ninjasitm/ai-assisted-dev-toolkit/main/src/repo/.agents/skills/writing-skills/SKILL.md', '.agents/skills/writing-skills/SKILL.md'),
]

os.chdir(BASE)
errors = []

for url, dest in FILES:
    try:
        dest_dir = os.path.dirname(dest)
        if dest_dir:
            os.makedirs(dest_dir, exist_ok=True)
        with urllib.request.urlopen(url, timeout=30) as response:
            content = response.read().decode('utf-8')
        content = substitute(content)
        with open(dest, 'w') as f:
            f.write(content)
        print(f"OK: {dest}")
    except Exception as e:
        print(f"ERROR: {dest} — {e}")
        errors.append((dest, str(e)))

# Copy .github/agents to .cursor/agents
print("\nCopying agents to .cursor/agents...")
for fname in os.listdir('.github/agents'):
    src = os.path.join('.github/agents', fname)
    dst = os.path.join('.cursor/agents', fname)
    shutil.copy2(src, dst)
    print(f"  Copied: {dst}")

# Copy .agents/skills to .github/skills and .cursor/skills
print("\nCopying skills to .github/skills and .cursor/skills...")
for skill_name in os.listdir('.agents/skills'):
    skill_src_dir = os.path.join('.agents/skills', skill_name)
    if not os.path.isdir(skill_src_dir):
        continue
    for target_base in ['.github/skills', '.cursor/skills']:
        target_dir = os.path.join(target_base, skill_name)
        os.makedirs(target_dir, exist_ok=True)
        for fname in os.listdir(skill_src_dir):
            shutil.copy2(os.path.join(skill_src_dir, fname), os.path.join(target_dir, fname))
            print(f"  Copied: {os.path.join(target_dir, fname)}")

if errors:
    print(f"\n{len(errors)} errors occurred:")
    for dest, err in errors:
        print(f"  {dest}: {err}")
else:
    print("\nAll files fetched successfully.")
