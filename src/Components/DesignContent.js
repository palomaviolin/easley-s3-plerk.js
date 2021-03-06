import React, { Component } from "react";

class DesignContent extends Component {
	constructor(props) {
		super(props);
		this.isColorSelected = this.isColorSelected.bind(this);
		this.isFontSelected = this.isFontSelected.bind(this);
	}
	isColorSelected(colorPaletteId) {
		return this.props.userInfo.palette.id === colorPaletteId;
	}

	isFontSelected(fontClassId) {
		return this.props.userInfo.typography.id === fontClassId;
	}

    render() {
      return (
     <div className="form_design_content">
     <ul className="set_colors">
       <li>
         <h2 className="design_subtitle design_colors">Colores</h2>
       </li>
       <li className="color_container">
         <label className="list_item" htmlFor="setcolors_green">
           <div className="colors_direction">
             <div className="box_darkgreen"></div>
             <div className="box_bluesky"></div>
             <div className="box_greenhospital"></div>
           </div>
         </label>
         <input id="setcolors_green" onChange={() => this.props.changeColor(1)} type="radio" name="setcolors_option" checked={this.isColorSelected(1)} />
       </li>
       <li className="color_container">
         <label className="list_item" htmlFor="setcolors_red">
           <div className="colors_direction">
             <div className="box_redblood"></div>
             <div className="box_redtomato"></div>
             <div className="box_orangetomato"></div>
           </div>
         </label>
         <input id="setcolors_red" onChange={() => this.props.changeColor(2)} type="radio" name="setcolors_option" checked={this.isColorSelected(2)} />
       </li>
       <li className="color_container">
         <label className="list_item" htmlFor="setcolors_blue">
           <div className="colors_direction">
             <div className="box_greyblue"></div>
             <div className="box_greypale"></div>
             <div className="box_bluesummer"></div>
           </div>
         </label>
         <input id="setcolors_blue" onChange={() => this.props.changeColor(3)} type="radio" name="setcolors_option" checked={this.isColorSelected(3)} />
       </li>
     </ul>
     <ul className="set_container">
       <li className="title_fonts_container">
         <h2 className="design_subtitle design_fonts">Fuentes</h2>
       </li>
       <div className="type_fonts_container">
         <li className="fonts_position">
           <label className="list_item" htmlFor="Ubuntu">Ubuntu</label>
           <input onChange={() => this.props.changeTypography(1)} className="selector_position" id="Ubuntu" type="radio" name="fonts_option" checked={this.isFontSelected(1)} />
         </li>
         <li className="fonts_position">
           <label className="list_item" htmlFor="ComicSans">Comic Sans</label>
           <input onChange={() => this.props.changeTypography(2)} className="selector_position" id="ComicSans" type="radio" name="fonts_option" checked={this.isFontSelected(2)} />
         </li>
         <li className="fonts_position">
           <label className="list_item" htmlFor="Montserrat">Montserrat</label>
           <input onChange={() => this.props.changeTypography(3)} className="selector_position" id="Montserrat" type="radio" name="fonts_option" checked={this.isFontSelected(3)} />
         </li>
       </div>
     </ul>
   </div>
)
}
}

export default DesignContent;
