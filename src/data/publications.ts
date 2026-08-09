export interface Publication {
  title: string;
  authors: string;
  venue: string;
  date: string;
  focus: string;
  doi: string;
  link: string;
}

export const publications: Publication[] = [
  {
    title: "Challenge Response Protocol using Multivariate Polynomial Cryptography",
    authors: "Chandra Keshwar Jaiswal, et al.",
    venue: "IEEE International Students' Conference on Electrical, Electronics and Computer Science (SCEECS)",
    date: "2025",
    focus: "Designed a post-quantum entity authentication protocol based on systems of multivariate quadratic equations (MQ-problem, NP-hard) to replace traditional RSA/ECC key exchanges under quantum threat models.",
    doi: "10.1109/SCEECS64059.2025.10940858",
    link: "https://doi.org/10.1109/SCEECS64059.2025.10940858"
  },
  {
    title: "Towards Efficient and Secure Authentication: A Novel Protocol with Formal Validation",
    authors: "Arpit Sharma, Chandra Keshwar Jaiswal",
    venue: "Springer International Conference on Machine Learning and Cyber Security (ICMLCS)",
    date: "2026",
    focus: "Developed a secure cryptographic entity authentication protocol. Created formal mathematical security models to validate protocol correctness and prove resistance against replay, impersonation, and intercept attacks.",
    doi: "10.1007/978-3-032-14156-9_41",
    link: "https://doi.org/10.1007/978-3-032-14156-9_41"
  }
];
