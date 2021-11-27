export const initialState ={
    mylist:[
        {
        id: "8",
        src: "../Movieimages/game of thrones.jpg",
        alt:"game of thrones"
        }
    ],
    user: null
};
const reducer = (state, action) => {
    switch(action.type){
        case "SET_USER":
            return {
                ...state,
                user: action.user
            }
        case "ADD_TO_MYLIST":
            return{
            ...state,
            mylist:[...state.mylist,action.item],
            };
        case "REMOVE_FROM_MYLIST":
            let newmylist = [...state.mylist]
            const index =  state.mylist.findIndex((mylistitem)=> mylistitem.id === action.id)
        if(index >= 0){
            newmylist.splice(index, 1);
        }else{
            console.warn(
                'Cant remove movie(id: ${action.id}) as it nowhere on the screen'
            );

        }
            return { ...state,mylist : newmylist }

            default:
                return state;

    }
}
export default reducer; 