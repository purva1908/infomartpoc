import React,{useState,useEffect} from 'react';
import axios from 'axios';

export default function Search(){
    const [allData,setAllData] = useState([]);
    const [filteredData,setFilteredData] = useState(allData);


    useEffect(() => {
        axios('https://fakestoreapi.com/products')
.then(response => {
console.log(response.data)
setAllData(response.data);
setFilteredData(response.data);
})
.catch(error => {
console.log('Error getting fake data: ' + error);
})
    }, []);

    const handleSearch = (event) =>{

        let value = event.target.value;
let result = [];
console.log(value);
result = allData.filter((data) => {
return data.title.search(value) != -1;
});
setFilteredData(result);
    }

    const styles = {
        display:'inline',
        width:'100%',
        height:'100%',
        float:'left',
        padding:5,
        border:'0.5px solid black',
        marginBottom:10,
        marginRight:10
        }
    return(
        <div className="search-app">
<div style={{ margin: '0 auto', marginTop: '10%' }}>
<label>Search:</label>
<input type="text" onChange={(event) =>handleSearch(event)} />
</div>

<div style={{padding:10}}>
{filteredData.map((value,index)=>{
return(
<div>
<div style={styles}  key={value.id} >
{value.title}
<img src={value.image} height="50px" width="50px"  />
</div>
</div>
)
})}
</div>

</div>

    )}
