import requests
files = {'file': ('upload.xml', '<classdiagram><class name=\"A\"/></classdiagram>', 'application/xml')}
data = {'tcf': '[5,5,5,5,5,5,5,5,5,5,5,5,5]', 'ecf': '[5,5,5,5,5,5,5,5]', 'hourly_rate': '500'}
r = requests.post('http://localhost:8000/api/v1/estimate', files=files, data=data)
print(r.json())
