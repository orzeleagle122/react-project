import React from 'react';
import Articles from '../components/Articles';


const articles = [
    {
        id: 1,
        title: "Czym jest tearia strun?",
        author: "Jan Nowak",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu consequat quam. Vestibulum et pellentesque massa. Proin a pretium odio, eu placerat dui. Suspendisse eu mauris nec neque auctor lacinia. Etiam ut tempus ligula, a molestie velit. Integer varius tortor lobortis enim semper, sit amet porttitor ipsum efficitur. Integer aliquam neque elit, ut blandit magna iaculis vitae. Etiam at felis iaculis, iaculis est a, venenatis arcu. Vestibulum interdum ultrices enim, a blandit justo vestibulum eget. Morbi finibus posuere urna eget hendrerit. Vivamus viverra maximus tellus, sit amet tempus nibh ultrices non. Nulla nec massa luctus, scelerisque velit vel, aliquet velit. Ut pellentesque nisl eu risus placerat aliquam. Proin metus leo, placerat ut imperdiet sed, aliquet vel sem. Suspendisse at efficitur enim. Phasellus suscipit, magna at tincidunt auctor, massa sapien placerat dui, non vehicula mi lectus sed quam."
    },
    {
        id: 2,
        title: "Czym jest paradox?",
        author: "Jan Nowak",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu consequat quam. Vestibulum et pellentesque massa. Proin a pretium odio, eu placerat dui. Suspendisse eu mauris nec neque auctor lacinia. Etiam ut tempus ligula, a molestie velit. Integer varius tortor lobortis enim semper, sit amet porttitor ipsum efficitur. Integer aliquam neque elit, ut blandit magna iaculis vitae. Etiam at felis iaculis, iaculis est a, venenatis arcu. Vestibulum interdum ultrices enim, a blandit justo vestibulum eget. Morbi finibus posuere urna eget hendrerit. Vivamus viverra maximus tellus, sit amet tempus nibh ultrices non. Nulla nec massa luctus, scelerisque velit vel, aliquet velit. Ut pellentesque nisl eu risus placerat aliquam. Proin metus leo, placerat ut imperdiet sed, aliquet vel sem. Suspendisse at efficitur enim. Phasellus suscipit, magna at tincidunt auctor, massa sapien placerat dui, non vehicula mi lectus sed quam."
    },
    {
        id: 3,
        title: "Ciemna materia i ciemna energia",
        author: "Jan Nowak",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu consequat quam. Vestibulum et pellentesque massa. Proin a pretium odio, eu placerat dui. Suspendisse eu mauris nec neque auctor lacinia. Etiam ut tempus ligula, a molestie velit. Integer varius tortor lobortis enim semper, sit amet porttitor ipsum efficitur. Integer aliquam neque elit, ut blandit magna iaculis vitae. Etiam at felis iaculis, iaculis est a, venenatis arcu. Vestibulum interdum ultrices enim, a blandit justo vestibulum eget. Morbi finibus posuere urna eget hendrerit. Vivamus viverra maximus tellus, sit amet tempus nibh ultrices non. Nulla nec massa luctus, scelerisque velit vel, aliquet velit. Ut pellentesque nisl eu risus placerat aliquam. Proin metus leo, placerat ut imperdiet sed, aliquet vel sem. Suspendisse at efficitur enim. Phasellus suscipit, magna at tincidunt auctor, massa sapien placerat dui, non vehicula mi lectus sed quam."
    }
]
const HomePage = () => {
    const artList=articles.map(art=> (
        <Articles key={art.id} {...art} />
    ))
    return ( 
        <div className="home">
            {artList}
        </div>
     );
}
 
export default HomePage;