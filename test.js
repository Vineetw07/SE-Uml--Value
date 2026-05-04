const formData = new FormData();
formData.append('file', new Blob([JSON.stringify({system: {actors: [], useCases: []}})], {type: 'application/json'}), 'test.json');
formData.append('hourly_rate', '50');
formData.append('tcf', JSON.stringify([1,1,1,1,1,1,1,1,1,1,1,1,1]));
formData.append('ecf', JSON.stringify([1,1,1,1,1,1,1,1]));
fetch('http://localhost:8000/api/v1/estimate', { method: 'POST', body: formData })
  .then(r => r.text())
  .then(console.log);

