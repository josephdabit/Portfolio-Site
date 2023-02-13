const { db, Project } = require('./server/db')

const seed = async () => {
    try {
        await db.sync({ force: true })

        const iffyEats = await Project.create({
            title: 'Iffy Eats',
            imageUrl: 'https://blog.hootsuite.com/wp-content/uploads/2021/05/all-apps-5.png',
            siteUrl: 'google.com'
        });

    } catch (err) {
        console.log(err);
    }
}

async function runSeed() {
    try {
        await seed()
        console.log('Seeding success!')
    } catch (err) {
        console.error('Seeding failed!')
        console.error(err)
    } finally{
        db.close()
    }
}

if (require.main === module) {
    runSeed()
}