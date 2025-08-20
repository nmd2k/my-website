---
title: "On the Impacts of Contexts on Repository-Level Code Generation" 
author: ["Nam Le Hai", "Dung Nguyen Manh", "Nghi D. Q. Bui"]
editPost:
    URL: "https://arxiv.org/abs/2406.11927"
    Text: "NAACL'25"

---

---

## Download

+ [Paper](2406.11927v3.pdf)
+ [Code and data](https://github.com/FSoft-AI4Code/RepoExec)

---

## Abstract

> CodeLLMs have gained widespread adoption for code generation tasks, yet their capacity to handle repository-level code generation with complex contextual dependencies remains underexplored. Our work underscores the critical importance of leveraging repository-level contexts to generate executable and functionally correct code. We present RepoExec, a novel benchmark designed to evaluate repository-level code generation, with a focus on three key aspects: executability, functional correctness through comprehensive test case generation, and accurate utilization of cross-file contexts. Our study examines a controlled scenario where developers specify essential code dependencies (contexts), challenging models to integrate them effectively. Additionally, we introduce an instruction-tuned dataset that enhances CodeLLMs’ ability to leverage dependencies, along with a new metric, Dependency Invocation Rate (DIR), to quantify context utilization. Experimental results reveal that while pretrained LLMs demonstrate superior performance in terms of correctness, instruction-tuned models excel in context utilization and debugging capabilities. RepoExec offers a comprehensive evaluation framework for assessing code functionality and alignment with developer intent, thereby advancing the development of more reliable CodeLLMs for real-world applications. The dataset and source code are available at this https URL.

---


## Citation

```BibTeX
@misc{hai2024impactscontextsrepositorylevelcode,
  title = {On the Impacts of Contexts on Repository-Level Code Generation},
  author = {Hai, Nam Le and Nguyen, Dung Manh and Bui, Nghi D. Q.},
  year = {2024},
  eprint = {2406.11927},
  archiveprefix = {arXiv},
  primaryclass = {cs.SE},
  url = {https://arxiv.org/abs/2406.11927},
}
```
