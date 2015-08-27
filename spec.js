describe(' google search app ', function(){

	it('check page title', function(){
		browser.get('http://localhost:63342/demo-angular/app');
		expect(browser.getTitle()).toEqual('something');
	});
});