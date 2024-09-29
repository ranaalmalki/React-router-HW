import Card from "./Card"
function Homepage(props) {
  return (
    <div className="bg-cover h-full p-48 relative flex flex-col gap-20" style={{backgroundImage:`url(${props.img})`}} >
 
    <div className="card shadow-lg shadow-black flex h-96  items-center justify-center text-center">
        <div className="card-body">
    <h1 className=" text-black">{props.name}</h1>
    <p className="text-black">{props.content}</p>
    </div>
    </div>
    <div>
<Card 
title="Desert"
title2="Forest"
title3="Mountains"
title4="Sea"
title5="Valley"

/>
</div>

</div>   
  )
}

export default Homepage