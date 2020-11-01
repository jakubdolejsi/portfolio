
const ProjectsModel =  {
    async FindOne(id: number): Promise<object> {
        return {
            one: 'one'
        }
    },
    async FindAll(): Promise<object> {
        return  {
            one: 'one',
            two: 'two'
        }
    }
}



export default ProjectsModel
