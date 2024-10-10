export default function View(props){

function defineColorOfJob(job){

if (job == "Software Developer"){
    return (
        <span style={{color: "red"}}>
            <strong>
                tem certeza?
            </strong>
            <br/>
            {job}
            </span>
    )
}
return(
    <span style={{color:"blue"}}>{job}</span>
)

}



   // const colorOfJob = props.job== "Software Developer" ? "red" : "blue"

return(
    <main>
        <h2>Apresentando os dados do cliente escolhido</h2>
    <span>Name: {props.name}</span><br/>
    <span>RGM: {props.rgm}</span><br/>   
    {defineColorOfJob(props.job)}          
</main>
)
}