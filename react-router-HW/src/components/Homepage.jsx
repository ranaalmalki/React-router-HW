import Card from "./Card"
function Homepage(props) {
  return (
    <div className="bg-cover  p-48 relative flex flex-col gap-20 lg:h-screen md:min-h-screen " style={{backgroundImage:`url(${props.img})`}} >
 
    <div className="card shadow-lg shadow-black flex  bg-green-50  items-center justify-center text-center ">
        <div className="card-body w-full ">
    <h1 className=" text-black text-3xl font-bold">{props.name}</h1>
    <p className="text-black text-xl">{props.content}</p>
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