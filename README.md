# journal-app

now we are building a journal app
basically it will help us to have a view of our notes..we can even classify based on our moods...

it provide authentication with google ---- basically using clerk
we can create journal entries inside our text editor...'
we can save our journal as a draft 

we can create collections to group different different entries...

search entries base on name , even date,,,
we can even classify it on base of our mood ---- analystic dashboard --- basically it will show a graph type.../

we will even shield our website with bot protection and limitting number of api strike...


building next js and shadcn ui....

we can categorize our genearl entries based on different different folders..

step1: npx create-next-app@latest 

now we are installing shadcn ui---- basically it contains prebuild - components which we can copy in our project....

npx shadcn@latest init
npx shadcn@latest add accordion alert-dialog badge button calendar card carousel dialog input popover select skeleton sonner textarea taost

npm install @clerk/nextjs in order to install clerk

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_aW50ZW5zZS1tdXN0YW5nLTYuY2xlcmsuYWNjb3VudHMuZGV2JA
CLERK_SECRET_KEY=sk_test_VCIVmw0tXPQ2h9tdhQhQYFsvFHuvF8TA0jUjBjU0jh 

environment variables

 neon database url : postgresql://sparsh2:npg_akQdusw2E0SH@ep-damp-breeze-a8bl747x-pooler.eastus2.azure.neon.tech/reflct?sslmode=require


 NOW AFTER THAT ...WE ARE INSTALLING ARCJET ----Security doesn't have to be a pain

 arcjet --- ajkey_01jxm8wgcffc990rs0gp5tkjdv

 to install arcjet --- npm i @arcjet/next @arcjet/inspect

 step : npm i @arcjet/next @arcjet/inspect

 now after that ...we need to paste our environmet variable key to our app 
 our environment variable key is ajkey_01jxm8wgcffc990rs0gp5tkjdv

 basically we can implement bot protection and shielding using arcjet
 -- we can also do the rate limiting for certain apis...

 now we are building the landing page....
 
we are using the new next js feature called unstablecache 

we are using primsa to connect with neon database

npm i -D prisma  ---- it will do the task
after that ---- npx prisma init


after that --- npx prisma generate

npx prisma migrate dev


now in our website..we need to generate a particular image..with respect to pixabay//
so we go to that official website

basically pixabay is used to genearte pictures ...
50835089-6f68d45fd4153a5211bf10dba this is the api key ---- THIS IS A PUBLIC API

now after that we are creating form using react form library with react xor library for manging form 

step : npm i react-hook-form zod @hookform/resolvers

also we are using ReactQuillNew library ----- it basically provide a rich text editor for us
like in our app --- there is option to write notes... and above that 
there are option of bold underline and all that options for our text editor .
so for that we are using react-quill-library 

react-quill-new --- more comparatable with next

step: npm i react-quill-new


now in our website..we are using recharts 

for that we are using npm i recharts