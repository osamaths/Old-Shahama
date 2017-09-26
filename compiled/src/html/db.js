'use strict';

//DataBase
window.moviesHolder = [{
	title: 'Cast Away',
	imgURL: 'https://images-na.ssl-images-amazon.com/images/M/MV5BN2Y5ZTU4YjctMDRmMC00MTg4LWE1M2MtMjk4MzVmOTE4YjkzXkEyXkFqcGdeQXVyNTc1NTQxODI@._V1_UX182_CR0,0,182,268_AL_.jpg',
	desc: 'A man is marooned on an island after his plane crashes into the ocean. Far away from home, his girlfriend, and any human contact, he engages in a battle of wits with himself as he is tested mentally, physically, and emotionally in order to survive.',
	director: 'Robert Zemeckis',
	cast: ['Tom Hanks', 'Elden Henson', 'Helen Hunt', 'Chris Noth']
}, {
	title: 'Captain Phillips',
	imgURL: 'http://www.sonypictures.com/movies/captainphillips/assets/images/onesheet.jpg',
	desc: 'Captain Phillips is a multi-layered examination of the 2009 hijacking of the U.S. container ship Maersk Alabama by a crew of Somali pirates',
	director: 'Paul Greengrass',
	cast: ['Tom Hanks', 'Max Martini']
}, {
	title: 'The Shawshank Redemption',
	imgURL: 'http://www.criticalcommons.org/Members/jtierney86/clips/shawshank-redemption-money-in-prison/thumbnailImage',
	desc: 'Chronicles the experiences of a formerly successful banker as a prisoner in the gloomy jailhouse of Shawshank after being found guilty of a crime he did not commit. The film portrays the man\'s unique way of dealing with his new, torturous life; along the way he befriends a number of fellow prisoners, most notably a wise long-term inmate named Red.',
	director: 'Frank Darabont',
	cast: ['Morgan Freeman', 'Tim Robbins']
}, {
	title: 'I am sam',
	imgURL: 'http://read.html5.qq.com/image?src=forum&q=5&r=0&imgflag=7&imageUrl=http://mmbiz.qpic.cn/mmbiz/4mXVRyMG7Ticib8hOjdI3gpPeoKicSaiaa4fv1VsnyxjO3MHxOmlwWsmBKF8luHhNdec8USqalm7IdZ5Tiacs8h4ibzg/0?wx_fmt=jpeg',
	desc: 'Sam Dawson has the mental capacity of a 7-year-old. He works at a Starbucks and is obsessed with the Beatles. He has a daughter with a homeless woman; she abandons them as soon as they leave the hospital. He names his daughter Lucy Diamond (after the Beatles song), and raises her. But as she reaches age 7 herself, Sam\'s limitations start to become a problem at school; she\'s intentionally holding back to avoid looking smarter than him. The authorities take her away, and Sam shames high-priced lawyer Rita Harrison into taking his case pro bono. In the process, he teaches her a great deal about love, and whether it\'s really all you need.',
	director: 'Jessie Nelson',
	cast: ['Sean Penn', 'Dakota Fanning', 'Mary Steenburgen', 'Michelle Pfeiffer']
}, {
	title: 'Shooter',
	imgURL: 'https://i.ytimg.com/vi/dlq6ngrYkuA/movieposter.jpg',
	desc: 'Bob Lee Swagger, one of the world\'s great marksmen and the son of a Congressional Medal of Honoree, is a loner living in the Rockies. He\'s left the military, having been hung out to dry in a secret Ethiopian mission a few years before, when he\'s recruited by a colonel to help find a way that the President of the US might be assassinated in one of three cities in the next two weeks. He does his work, but the shot is fired notwithstanding and Bob Lee is quickly the fall guy: wounded and hunted by thousands, he goes to ground and, aided by two unlikely allies, searches for the truth and for those who double-crossed him. All roads lead back to Ethiopia.',
	director: 'Antoine Fuqua',
	cast: ['Mark Wahlberg', 'Kate Mara', 'Rhona Mitra', 'Michael Peña']
}]; //****************************************************************
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9odG1sL2RiLmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsIm1vdmllc0hvbGRlciIsInRpdGxlIiwiaW1nVVJMIiwiZGVzYyIsImRpcmVjdG9yIiwiY2FzdCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBQSxPQUFPQyxZQUFQLEdBQXNCLENBQ3JCO0FBQ0NDLFFBQU0sV0FEUDtBQUVDQyxTQUFRLG1LQUZUO0FBR0NDLE9BQU0sMFBBSFA7QUFJQ0MsV0FBVSxpQkFKWDtBQUtDQyxPQUFLLENBQUMsV0FBRCxFQUFjLGNBQWQsRUFBOEIsWUFBOUIsRUFBNEMsWUFBNUM7QUFMTixDQURxQixFQVFyQjtBQUNDSixRQUFNLGtCQURQO0FBRUNDLFNBQVEsK0VBRlQ7QUFHQ0MsT0FBTSw2SUFIUDtBQUlDQyxXQUFVLGlCQUpYO0FBS0NDLE9BQUssQ0FBQyxXQUFELEVBQWMsYUFBZDtBQUxOLENBUnFCLEVBZXJCO0FBQ0NKLFFBQU0sMEJBRFA7QUFFQ0MsU0FBUSw2R0FGVDtBQUdDQyxPQUFNLGdXQUhQO0FBSUNDLFdBQVUsZ0JBSlg7QUFLQ0MsT0FBSyxDQUFDLGdCQUFELEVBQW1CLGFBQW5CO0FBTE4sQ0FmcUIsRUFzQnJCO0FBQ0NKLFFBQU0sVUFEUDtBQUVDQyxTQUFRLDJNQUZUO0FBR0NDLE9BQU0sdW9CQUhQO0FBSUNDLFdBQVUsZUFKWDtBQUtDQyxPQUFLLENBQUMsV0FBRCxFQUFjLGdCQUFkLEVBQWdDLGtCQUFoQyxFQUFvRCxtQkFBcEQ7QUFMTixDQXRCcUIsRUE2QnJCO0FBQ0NKLFFBQU0sU0FEUDtBQUVDQyxTQUFRLG9EQUZUO0FBR0NDLE9BQU0sc3BCQUhQO0FBSUNDLFdBQVUsZUFKWDtBQUtDQyxPQUFLLENBQUMsZUFBRCxFQUFrQixXQUFsQixFQUErQixhQUEvQixFQUE4QyxjQUE5QztBQUxOLENBN0JxQixDQUF0QixDLENBb0NFIiwiZmlsZSI6ImRiLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9EYXRhQmFzZVxyXG53aW5kb3cubW92aWVzSG9sZGVyID0gW1xyXG5cdHtcclxuXHRcdHRpdGxlOidDYXN0IEF3YXknLFxyXG5cdFx0aW1nVVJMOiAnaHR0cHM6Ly9pbWFnZXMtbmEuc3NsLWltYWdlcy1hbWF6b24uY29tL2ltYWdlcy9NL01WNUJOMlk1WlRVNFlqY3RNRFJtTUMwME1UZzRMV0UxTTJNdE1qazRNelZtT1RFNFlqa3pYa0V5WGtGcWNHZGVRWFZ5TlRjMU5UUXhPRElALl9WMV9VWDE4Ml9DUjAsMCwxODIsMjY4X0FMXy5qcGcnLFxyXG5cdFx0ZGVzYzogJ0EgbWFuIGlzIG1hcm9vbmVkIG9uIGFuIGlzbGFuZCBhZnRlciBoaXMgcGxhbmUgY3Jhc2hlcyBpbnRvIHRoZSBvY2Vhbi4gRmFyIGF3YXkgZnJvbSBob21lLCBoaXMgZ2lybGZyaWVuZCwgYW5kIGFueSBodW1hbiBjb250YWN0LCBoZSBlbmdhZ2VzIGluIGEgYmF0dGxlIG9mIHdpdHMgd2l0aCBoaW1zZWxmIGFzIGhlIGlzIHRlc3RlZCBtZW50YWxseSwgcGh5c2ljYWxseSwgYW5kIGVtb3Rpb25hbGx5IGluIG9yZGVyIHRvIHN1cnZpdmUuJyxcclxuXHRcdGRpcmVjdG9yOiAnUm9iZXJ0IFplbWVja2lzJyxcclxuXHRcdGNhc3Q6WydUb20gSGFua3MnLCAnRWxkZW4gSGVuc29uJywgJ0hlbGVuIEh1bnQnLCAnQ2hyaXMgTm90aCddXHJcblx0fSxcclxuXHR7XHJcblx0XHR0aXRsZTonQ2FwdGFpbiBQaGlsbGlwcycsXHJcblx0XHRpbWdVUkw6ICdodHRwOi8vd3d3LnNvbnlwaWN0dXJlcy5jb20vbW92aWVzL2NhcHRhaW5waGlsbGlwcy9hc3NldHMvaW1hZ2VzL29uZXNoZWV0LmpwZycsXHJcblx0XHRkZXNjOiAnQ2FwdGFpbiBQaGlsbGlwcyBpcyBhIG11bHRpLWxheWVyZWQgZXhhbWluYXRpb24gb2YgdGhlIDIwMDkgaGlqYWNraW5nIG9mIHRoZSBVLlMuIGNvbnRhaW5lciBzaGlwIE1hZXJzayBBbGFiYW1hIGJ5IGEgY3JldyBvZiBTb21hbGkgcGlyYXRlcycsXHJcblx0XHRkaXJlY3RvcjogJ1BhdWwgR3JlZW5ncmFzcycsXHJcblx0XHRjYXN0OlsnVG9tIEhhbmtzJywgJ01heCBNYXJ0aW5pJ11cclxuXHR9LFxyXG5cdHtcclxuXHRcdHRpdGxlOidUaGUgU2hhd3NoYW5rIFJlZGVtcHRpb24nLFxyXG5cdFx0aW1nVVJMOiAnaHR0cDovL3d3dy5jcml0aWNhbGNvbW1vbnMub3JnL01lbWJlcnMvanRpZXJuZXk4Ni9jbGlwcy9zaGF3c2hhbmstcmVkZW1wdGlvbi1tb25leS1pbi1wcmlzb24vdGh1bWJuYWlsSW1hZ2UnLFxyXG5cdFx0ZGVzYzogJ0Nocm9uaWNsZXMgdGhlIGV4cGVyaWVuY2VzIG9mIGEgZm9ybWVybHkgc3VjY2Vzc2Z1bCBiYW5rZXIgYXMgYSBwcmlzb25lciBpbiB0aGUgZ2xvb215IGphaWxob3VzZSBvZiBTaGF3c2hhbmsgYWZ0ZXIgYmVpbmcgZm91bmQgZ3VpbHR5IG9mIGEgY3JpbWUgaGUgZGlkIG5vdCBjb21taXQuIFRoZSBmaWxtIHBvcnRyYXlzIHRoZSBtYW5cXCdzIHVuaXF1ZSB3YXkgb2YgZGVhbGluZyB3aXRoIGhpcyBuZXcsIHRvcnR1cm91cyBsaWZlOyBhbG9uZyB0aGUgd2F5IGhlIGJlZnJpZW5kcyBhIG51bWJlciBvZiBmZWxsb3cgcHJpc29uZXJzLCBtb3N0IG5vdGFibHkgYSB3aXNlIGxvbmctdGVybSBpbm1hdGUgbmFtZWQgUmVkLicsXHJcblx0XHRkaXJlY3RvcjogJ0ZyYW5rIERhcmFib250JyxcclxuXHRcdGNhc3Q6WydNb3JnYW4gRnJlZW1hbicsICdUaW0gUm9iYmlucyddXHJcblx0fSxcclxuXHR7XHJcblx0XHR0aXRsZTonSSBhbSBzYW0nLFxyXG5cdFx0aW1nVVJMOiAnaHR0cDovL3JlYWQuaHRtbDUucXEuY29tL2ltYWdlP3NyYz1mb3J1bSZxPTUmcj0wJmltZ2ZsYWc9NyZpbWFnZVVybD1odHRwOi8vbW1iaXoucXBpYy5jbi9tbWJpei80bVhWUnlNRzdUaWNpYjhoT2pkSTNncFBlb0tpY1NhaWFhNGZ2MVZzbnl4ak8zTUh4T21sd1dzbUJLRjhsdUhoTmRlYzhVU3FhbG03SWRaNVRpYWNzOGg0aWJ6Zy8wP3d4X2ZtdD1qcGVnJyxcclxuXHRcdGRlc2M6ICdTYW0gRGF3c29uIGhhcyB0aGUgbWVudGFsIGNhcGFjaXR5IG9mIGEgNy15ZWFyLW9sZC4gSGUgd29ya3MgYXQgYSBTdGFyYnVja3MgYW5kIGlzIG9ic2Vzc2VkIHdpdGggdGhlIEJlYXRsZXMuIEhlIGhhcyBhIGRhdWdodGVyIHdpdGggYSBob21lbGVzcyB3b21hbjsgc2hlIGFiYW5kb25zIHRoZW0gYXMgc29vbiBhcyB0aGV5IGxlYXZlIHRoZSBob3NwaXRhbC4gSGUgbmFtZXMgaGlzIGRhdWdodGVyIEx1Y3kgRGlhbW9uZCAoYWZ0ZXIgdGhlIEJlYXRsZXMgc29uZyksIGFuZCByYWlzZXMgaGVyLiBCdXQgYXMgc2hlIHJlYWNoZXMgYWdlIDcgaGVyc2VsZiwgU2FtXFwncyBsaW1pdGF0aW9ucyBzdGFydCB0byBiZWNvbWUgYSBwcm9ibGVtIGF0IHNjaG9vbDsgc2hlXFwncyBpbnRlbnRpb25hbGx5IGhvbGRpbmcgYmFjayB0byBhdm9pZCBsb29raW5nIHNtYXJ0ZXIgdGhhbiBoaW0uIFRoZSBhdXRob3JpdGllcyB0YWtlIGhlciBhd2F5LCBhbmQgU2FtIHNoYW1lcyBoaWdoLXByaWNlZCBsYXd5ZXIgUml0YSBIYXJyaXNvbiBpbnRvIHRha2luZyBoaXMgY2FzZSBwcm8gYm9uby4gSW4gdGhlIHByb2Nlc3MsIGhlIHRlYWNoZXMgaGVyIGEgZ3JlYXQgZGVhbCBhYm91dCBsb3ZlLCBhbmQgd2hldGhlciBpdFxcJ3MgcmVhbGx5IGFsbCB5b3UgbmVlZC4nLFxyXG5cdFx0ZGlyZWN0b3I6ICdKZXNzaWUgTmVsc29uJyxcclxuXHRcdGNhc3Q6WydTZWFuIFBlbm4nLCAnRGFrb3RhIEZhbm5pbmcnLCAnTWFyeSBTdGVlbmJ1cmdlbicsICdNaWNoZWxsZSBQZmVpZmZlciddXHJcblx0fSxcclxuXHR7XHJcblx0XHR0aXRsZTonU2hvb3RlcicsXHJcblx0XHRpbWdVUkw6ICdodHRwczovL2kueXRpbWcuY29tL3ZpL2RscTZuZ3JZa3VBL21vdmllcG9zdGVyLmpwZycsXHJcblx0XHRkZXNjOiAnQm9iIExlZSBTd2FnZ2VyLCBvbmUgb2YgdGhlIHdvcmxkXFwncyBncmVhdCBtYXJrc21lbiBhbmQgdGhlIHNvbiBvZiBhIENvbmdyZXNzaW9uYWwgTWVkYWwgb2YgSG9ub3JlZSwgaXMgYSBsb25lciBsaXZpbmcgaW4gdGhlIFJvY2tpZXMuIEhlXFwncyBsZWZ0IHRoZSBtaWxpdGFyeSwgaGF2aW5nIGJlZW4gaHVuZyBvdXQgdG8gZHJ5IGluIGEgc2VjcmV0IEV0aGlvcGlhbiBtaXNzaW9uIGEgZmV3IHllYXJzIGJlZm9yZSwgd2hlbiBoZVxcJ3MgcmVjcnVpdGVkIGJ5IGEgY29sb25lbCB0byBoZWxwIGZpbmQgYSB3YXkgdGhhdCB0aGUgUHJlc2lkZW50IG9mIHRoZSBVUyBtaWdodCBiZSBhc3Nhc3NpbmF0ZWQgaW4gb25lIG9mIHRocmVlIGNpdGllcyBpbiB0aGUgbmV4dCB0d28gd2Vla3MuIEhlIGRvZXMgaGlzIHdvcmssIGJ1dCB0aGUgc2hvdCBpcyBmaXJlZCBub3R3aXRoc3RhbmRpbmcgYW5kIEJvYiBMZWUgaXMgcXVpY2tseSB0aGUgZmFsbCBndXk6IHdvdW5kZWQgYW5kIGh1bnRlZCBieSB0aG91c2FuZHMsIGhlIGdvZXMgdG8gZ3JvdW5kIGFuZCwgYWlkZWQgYnkgdHdvIHVubGlrZWx5IGFsbGllcywgc2VhcmNoZXMgZm9yIHRoZSB0cnV0aCBhbmQgZm9yIHRob3NlIHdobyBkb3VibGUtY3Jvc3NlZCBoaW0uIEFsbCByb2FkcyBsZWFkIGJhY2sgdG8gRXRoaW9waWEuJyxcclxuXHRcdGRpcmVjdG9yOiAnQW50b2luZSBGdXF1YScsXHJcblx0XHRjYXN0OlsnTWFyayBXYWhsYmVyZycsICdLYXRlIE1hcmEnLCAnUmhvbmEgTWl0cmEnLCAnTWljaGFlbCBQZcOxYSddXHJcblx0fVxyXG5dOy8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4iXX0=