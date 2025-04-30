document.addEventListener('DOMContentLoaded', function () {
  // HTML要素（インプット要素）を取得
  const inputTitle = document.getElementById('Title');
  const inputAddress = document.getElementById('Address');
  const inputLat = document.getElementById('Latitude');
  const inputLng = document.getElementById('Longitude');

  // オプションを作成
  const options = {
    types: ['establishment'],
    componentRestrictions: { country: 'JP' },
  };

  // オートコンプリートを適用したインスタンスを作成（初期化）
  const autocompleteTitle = new google.maps.places.Autocomplete(inputTitle, options);
  const autocompleteAddress = new google.maps.places.Autocomplete(inputAddress, options);

  // タイトル候補から選択されたときにタイトルと住所を補完
  autocompleteTitle.addListener('place_changed', function () {
    const place = autocompleteTitle.getPlace();
    inputTitle.value = place.name;
    inputAddress.value = place.formatted_address;
    inputLat.value = place.geometry.location.lat();
    inputLng.value = place.geometry.location.lng();
  });

  // 住所候補から選択されたときにタイトルと住所を補完
  autocompleteAddress.addListener('place_changed', function () {
    const place = autocompleteAddress.getPlace();
    inputTitle.value = place.name;
    inputAddress.value = place.formatted_address;    
    inputLat.value = place.geometry.location.lat();
    inputLng.value = place.geometry.location.lng();
  });
});
