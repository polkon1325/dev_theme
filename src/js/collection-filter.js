class Filter {
	constructor(filterForm, filterDisplay){
		this.filterForm = filterForm;
		this.filterDisplay = filterDisplay;
	}

	getData(){
		var fields, fieldName, fieldValue, filterData = [], searchQuery = '?';
		fields = this.filterForm.querySelectorAll('input:checked, input[type="number"]');
		fields.forEach(function(index){
			filterData.length !=0 ? searchQuery += `${fieldName} = ${fieldValue}` : searchQuery += `&${fieldName} = ${fieldValue}`
		})
		return
	}
}