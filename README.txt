ORBIO DESK WEBSITE - GITHUB PAR LIVE KARNE KE STEPS

1. github.com par naya repository banayen (Public).
2. Is zip ko khol kar andar ki files upload karein: Add file > Upload files.
   index.html ka naam badalna nahi hai.
3. Commit changes dabayen.
4. Settings > Pages: Source = Deploy from a branch, branch = main, folder = / (root), Save.
5. Custom domain mein apna domain likhein (jaise orbioltd.co.uk) aur Save karein. GitHub CNAME file khud bana deta hai.
6. Domain ke DNS mein 4 A records: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
   aur www ke liye CNAME: aapkausername.github.io  (IPs GitHub docs se ek baar tasdeeq kar lein)
7. Pages mein Enforce HTTPS tick karein.

Is website mein koi alag tasveer ki file nahi hai. Sab kuch index.html ke andar hai.
Form abhi email app kholta hai. Web3Forms ki access key milne par index.html mein FORM_KEY='' mein key daal dein.
