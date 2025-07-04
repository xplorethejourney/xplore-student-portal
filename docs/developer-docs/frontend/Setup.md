# Xplore Frontend Setup

Please read up to the last section of this page which describes how to work on a feature so that you may not be doing the same work twice.

## How to contribute

1. Go to the [Xplore-student-portal](https://github.com/xplorethejourney/xplore-student-portal) repo's homepage and click on the fork button.  
    This should create a copy of the repo in your own account.
    Now copy the link of the repo from the green button on the top right corner of the page in order to clone this forked repo.

    Doing it this way elliminated the need to change the repo's remote URL when you push. In this set up you will push to your own repo and send PR by going back on github's website or using the command line tool `gh`, which is not recommended for beginners. **Although CLI git is highly recommended if you like to contribute to this project**

1. **Clone the repo:**
    For the purposes of this guide, we will assume you have forked the repo to your local machine but i will use the original repo's link in the following steps.

    ```
    git clone https://github.com/xplorethejourney/xplore-student-portal.git
    ```

1. Go into the project directory  

    `cd xplore-student-portal`

1. Install dependencies.

    ```
    npm i
    ```
    After installation if `heroui-cli` is not accessible via CLI during later in the development, run `npm install -g heroui-cli`, this is from the [heroui documentation](https://www.heroui.com/docs/guide/installation).


1. Change the branch and directory

    ```
    git checkout landing-webapp
    cd xplore-landing-webapp
    ```


1. Start the development server

    ```
    npm run dev
    ```


1. View the frontend  
    Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.  


1. Start Editing and adding your feature.

    You can start editing the page by modifying `pages/index.tsx` or related pages.
    Before beginning to implement a feature, please raise an issue in the [issues](https://github.com/xplorethejourney/xplore-student-portal/issues) section of the repo. 

    Upto 10 people can work on a feature(Issue) at a time.  
    **When raising an issue, please mention the issue number in the description and use the template provided in notion's HOW TO CONTRIBUTE section or whatsapp community**

