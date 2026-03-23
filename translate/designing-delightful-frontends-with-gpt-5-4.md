# Designing delightful frontends with GPT-5.4

Source URL: <https://developers.openai.com/blog/designing-delightful-frontends-with-gpt-5-4>
Date: 2026-03-20
Authors: Brian Fioca, Alistair Gillespie, Kevin Leneway, Robert Tinn

Practical techniques for steering GPT-5.4 toward polished, production-ready frontend designs.

GPT-5.4 is a better web developer than its predecessors—generating more visually appealing and ambitious frontends. Notably, we trained GPT-5.4 with a focus on improved UI capabilities and use of images. With the right guidance, the model can produce production-ready frontends incorporating subtle touches, well-crafted interactions, and beautiful imagery.

Web design can produce a large surface area of outcomes. Great design balances restraint with invention—drawing from patterns that have stood the test of time while introducing something new. GPT-5.4 has learned this wide spectrum of design approaches and understands many different ways a website can be built.

When prompts are underspecified, models often fall back to high-frequency patterns from the training data. Some of these are proven conventions, but many are simply overrepresented habits we want to avoid. The result is usually plausible and functional, but it can drift toward generic structure, weak visual hierarchy, and design choices that fall short of what we visualize in our heads.

This guide explains practical techniques for steering GPT-5.4 toward crafting the designs you envision.

## Model Improvements

- stronger image understanding throughout the design process
- more functionally complete apps and websites
- better use of tools to inspect, test, and verify its own work

### Image understanding and tool use

GPT-5.4 was trained to use image search and image generation tools natively, allowing it to incorporate visual reasoning directly into its design process. For best results, instruct the model to first generate a mood board or several visual options before selecting the final assets.

You can guide the model toward strong visual references by explicitly describing the attributes the images should capture. You should also include prompt instructions that guide the model to reuse previously generated images, call the image generation tool to create new visuals, or reference specific external images when required.

### Functionality improvements

The model was trained to develop more complete and functionally sound apps. Expect the model to be more reliable over long-horizon tasks.

### Computer Use and Verification

GPT-5.4 is our first mainline model trained for computer use. It can natively navigate interfaces, and combined with tools such as Playwright, it can iteratively inspect its work, validate behavior, and refine implementations.

Playwright is particularly valuable for front-end development. It allows the model to inspect rendered pages, test multiple viewports, navigate application flows, and detect issues with state or navigation.

## Practical tips quickstart

1. Select low reasoning level to begin with.
2. Define your design system and constraints upfront.
3. Provide visual references or a mood board.
4. Define a narrative or content strategy upfront.

## Techniques for better designs

### Start with design principles

Define constraints such as one H1 headline, no more than six sections, two typefaces maximum, one accent color, and one primary CTA above the fold.

### Provide visual references

Reference screenshots or mood boards help the model infer layout rhythm, typography scale, spacing systems, and imagery treatment.

### Structure the page as a narrative

1. Hero — establish identity and promise
2. Supporting imagery — show context or environment
3. Product detail — explain the offering
4. Social proof — establish credibility
5. Final CTA — convert interest into action

### Instruct design system adherence

Encourage the model to establish a clear design system early in the build. Define core design tokens and typography roles.

### Dial back the reasoning

For simpler websites, more reasoning is not always better. Low and medium reasoning often lead to stronger front-end results.

### Ground the design in real content

Providing the model with real copy, product context, or a clear project goal improves front-end results significantly.

## Bringing it all together with the Frontend Skill

The article includes a dedicated `frontend-skill` block with detailed guidance on composition, hierarchy, imagery, copy, product UI, motion, and hard rules.

## Key Takeaway

GPT-5.4 can generate high-quality front-end interfaces when prompts provide clear design constraints, visual references, structured narratives, and defined design systems.
