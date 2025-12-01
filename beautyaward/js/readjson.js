// time stamp (for cache clear)
const date = new Date();
const str = date.getFullYear()
  + ('0' + (date.getMonth() + 1)).slice(-2)
  + ('0' + date.getDate()).slice(-2)
  + ('0' + date.getHours()).slice(-2)
  + ('0' + date.getMinutes()).slice(-2)
  + ('0' + date.getSeconds()).slice(-2)


// 非表示
function deleteObj(obj){
  obj.style.display = 'none';
}


// ------------------------------------------------------- //　仙台


// read sendai_salons.json
function readJsonSendaiSalons(){

  const vmCpnList = new Vue({
    el: '#bestsalonsendai',
    data: {
      results: []
    },
    mounted: function mounted() {
      const _this = this;

      // 全体がレンダリングされた後にのみ実行される
      _this.$nextTick(function() {

        // loadしたら表示(class='-loaded'を付与)
        const obj = document.getElementById('bestsalonsendai');
        if(obj !== null){
          obj.classList.add('-loaded');
        }

        const url = '/cnt/topics/campaign/beautyaward/json/sendai_salons.json?v' + str;

        axios.get(url).then(function (response) {
          _this.results = response.data;
        }).catch(function onRejected(error) {
        });
      })
    },
    computed: {
      processedPosts: function processedPosts() {
        const posts = this.results;
      }
    }
  });
}

// read sendai_stylists.json
function readJsonSendaiStylists(){

  const vmCpnList = new Vue({
    el: '#beststylistsendai',
    data: {
      results: []
    },
    mounted: function mounted() {
      const _this = this;

      // 全体がレンダリングされた後にのみ実行される
      _this.$nextTick(function() {

        // loadしたら表示(class='-loaded'を付与)
        const obj = document.getElementById('beststylistsendai');
        if(obj !== null){
          obj.classList.add('-loaded');
        }

        const url = '/cnt/topics/campaign/beautyaward/json/sendai_stylists.json?v' + str;

        axios.get(url).then(function (response) {
          _this.results = response.data;
        }).catch(function onRejected(error) {
        });
      })
    },
    computed: {
      processedPosts: function processedPosts() {
        const posts = this.results;
      }
    }
  });
}


// ------------------------------------------------------- //　神戸


// read kobe_salons.json
function readJsonKobeSalons(){

  const vmCpnList = new Vue({
    el: '#bestsalonkobe',
    data: {
      results: []
    },
    mounted: function mounted() {
      const _this = this;

      // 全体がレンダリングされた後にのみ実行される
      _this.$nextTick(function() {

        // loadしたら表示(class='-loaded'を付与)
        const obj = document.getElementById('bestsalonkobe');
        if(obj !== null){
          obj.classList.add('-loaded');
        }

        const url = '/cnt/topics/campaign/beautyaward/json/kobe_salons.json?v' + str;

        axios.get(url).then(function (response) {
          _this.results = response.data;
        }).catch(function onRejected(error) {
        });
      })
    },
    computed: {
      processedPosts: function processedPosts() {
        const posts = this.results;
      }
    }
  });
}

// read kobe_stylists.json
function readJsonKobeStylists(){

  const vmCpnList = new Vue({
    el: '#beststylistkobe',
    data: {
      results: []
    },
    mounted: function mounted() {
      const _this = this;

      // 全体がレンダリングされた後にのみ実行される
      _this.$nextTick(function() {

        // loadしたら表示(class='-loaded'を付与)
        const obj = document.getElementById('beststylistkobe');
        if(obj !== null){
          obj.classList.add('-loaded');
        }

        const url = '/cnt/topics/campaign/beautyaward/json/kobe_stylists.json?v' + str;

        axios.get(url).then(function (response) {
          _this.results = response.data;
        }).catch(function onRejected(error) {
        });
      })
    },
    computed: {
      processedPosts: function processedPosts() {
        const posts = this.results;
      }
    }
  });
}


// ------------------------------------------------------- //　福岡


// read fukuoka_salons.json
function readJsonFukuokaSalons(){

  const vmCpnList = new Vue({
    el: '#bestsalonfukuoka',
    data: {
      results: []
    },
    mounted: function mounted() {
      const _this = this;

      // 全体がレンダリングされた後にのみ実行される
      _this.$nextTick(function() {

        // loadしたら表示(class='-loaded'を付与)
        const obj = document.getElementById('bestsalonfukuoka');
        if(obj !== null){
          obj.classList.add('-loaded');
        }

        const url = '/cnt/topics/campaign/beautyaward/json/fukuoka_salons.json?v' + str;

        axios.get(url).then(function (response) {
          _this.results = response.data;
        }).catch(function onRejected(error) {
        });
      })
    },
    computed: {
      processedPosts: function processedPosts() {
        const posts = this.results;
      }
    }
  });
}

// read fukuoka_stylists.json
function readJsonFukuokaStylists(){

  const vmCpnList = new Vue({
    el: '#beststylistfukuoka',
    data: {
      results: []
    },
    mounted: function mounted() {
      const _this = this;

      // 全体がレンダリングされた後にのみ実行される
      _this.$nextTick(function() {

        // loadしたら表示(class='-loaded'を付与)
        const obj = document.getElementById('beststylistfukuoka');
        if(obj !== null){
          obj.classList.add('-loaded');
        }

        const url = '/cnt/topics/campaign/beautyaward/json/fukuoka_stylists.json?v' + str;

        axios.get(url).then(function (response) {
          _this.results = response.data;
        }).catch(function onRejected(error) {
        });
      })
    },
    computed: {
      processedPosts: function processedPosts() {
        const posts = this.results;
      }
    }
  });
}


// ------------------------------------------------------- //　さいたま


// read saitama_salons.json
function readJsonSaitamaSalons(){

  const vmCpnList = new Vue({
    el: '#bestsalonsaitama',
    data: {
      results: []
    },
    mounted: function mounted() {
      const _this = this;

      // 全体がレンダリングされた後にのみ実行される
      _this.$nextTick(function() {

        // loadしたら表示(class='-loaded'を付与)
        const obj = document.getElementById('bestsalonsaitama');
        if(obj !== null){
          obj.classList.add('-loaded');
        }

        const url = '/cnt/topics/campaign/beautyaward/json/saitama_salons.json?v' + str;

        axios.get(url).then(function (response) {
          _this.results = response.data;
        }).catch(function onRejected(error) {
        });
      })
    },
    computed: {
      processedPosts: function processedPosts() {
        const posts = this.results;
      }
    }
  });
}

// read saitama_stylists.json
function readJsonSaitamaStylists(){

  const vmCpnList = new Vue({
    el: '#beststylistsaitama',
    data: {
      results: []
    },
    mounted: function mounted() {
      const _this = this;

      // 全体がレンダリングされた後にのみ実行される
      _this.$nextTick(function() {

        // loadしたら表示(class='-loaded'を付与)
        const obj = document.getElementById('beststylistsaitama');
        if(obj !== null){
          obj.classList.add('-loaded');
        }

        const url = '/cnt/topics/campaign/beautyaward/json/saitama_stylists.json?v' + str;

        axios.get(url).then(function (response) {
          _this.results = response.data;
        }).catch(function onRejected(error) {
        });
      })
    },
    computed: {
      processedPosts: function processedPosts() {
        const posts = this.results;
      }
    }
  });
}


// ------------------------------------------------------- //　札幌


// read sapporo_salons.json
function readJsonSapporoSalons(){

  const vmCpnList = new Vue({
    el: '#bestsalonsapporo',
    data: {
      results: []
    },
    mounted: function mounted() {
      const _this = this;

      // 全体がレンダリングされた後にのみ実行される
      _this.$nextTick(function() {

        // loadしたら表示(class='-loaded'を付与)
        const obj = document.getElementById('bestsalonsapporo');
        if(obj !== null){
          obj.classList.add('-loaded');
        }

        const url = '/cnt/topics/campaign/beautyaward/json/sapporo_salons.json?v' + str;

        axios.get(url).then(function (response) {
          _this.results = response.data;
        }).catch(function onRejected(error) {
        });
      })
    },
    computed: {
      processedPosts: function processedPosts() {
        const posts = this.results;
      }
    }
  });
}

// read sapporo_stylists.json
function readJsonSapporoStylists(){

  const vmCpnList = new Vue({
    el: '#beststylistsapporo',
    data: {
      results: []
    },
    mounted: function mounted() {
      const _this = this;

      // 全体がレンダリングされた後にのみ実行される
      _this.$nextTick(function() {

        // loadしたら表示(class='-loaded'を付与)
        const obj = document.getElementById('beststylistsapporo');
        if(obj !== null){
          obj.classList.add('-loaded');
        }

        const url = '/cnt/topics/campaign/beautyaward/json/sapporo_stylists.json?v' + str;

        axios.get(url).then(function (response) {
          _this.results = response.data;
        }).catch(function onRejected(error) {
        });
      })
    },
    computed: {
      processedPosts: function processedPosts() {
        const posts = this.results;
      }
    }
  });
}


// ------------------------------------------------------- //　広島


// read hiroshima_salons.json
function readJsonHiroshimaSalons(){

  const vmCpnList = new Vue({
    el: '#bestsalonhiroshima',
    data: {
      results: []
    },
    mounted: function mounted() {
      const _this = this;

      // 全体がレンダリングされた後にのみ実行される
      _this.$nextTick(function() {

        // loadしたら表示(class='-loaded'を付与)
        const obj = document.getElementById('bestsalonhiroshima');
        if(obj !== null){
          obj.classList.add('-loaded');
        }

        const url = '/cnt/topics/campaign/beautyaward/json/hiroshima_salons.json?v' + str;

        axios.get(url).then(function (response) {
          _this.results = response.data;
        }).catch(function onRejected(error) {
        });
      })
    },
    computed: {
      processedPosts: function processedPosts() {
        const posts = this.results;
      }
    }
  });
}

// read hiroshima_stylists.json
function readJsonHiroshimaStylists(){

  const vmCpnList = new Vue({
    el: '#beststylisthiroshima',
    data: {
      results: []
    },
    mounted: function mounted() {
      const _this = this;

      // 全体がレンダリングされた後にのみ実行される
      _this.$nextTick(function() {

        // loadしたら表示(class='-loaded'を付与)
        const obj = document.getElementById('beststylisthiroshima');
        if(obj !== null){
          obj.classList.add('-loaded');
        }

        const url = '/cnt/topics/campaign/beautyaward/json/hiroshima_stylists.json?v' + str;

        axios.get(url).then(function (response) {
          _this.results = response.data;
        }).catch(function onRejected(error) {
        });
      })
    },
    computed: {
      processedPosts: function processedPosts() {
        const posts = this.results;
      }
    }
  });
}

// ------------------------------------------------------- //　東京


// read tokyo_salons.json
function readJsonTokyoSalons(){

  const vmCpnList = new Vue({
    el: '#bestsalontokyo',
    data: {
      results: []
    },
    mounted: function mounted() {
      const _this = this;

      // 全体がレンダリングされた後にのみ実行される
      _this.$nextTick(function() {

        // loadしたら表示(class='-loaded'を付与)
        const obj = document.getElementById('bestsalontokyo');
        if(obj !== null){
          obj.classList.add('-loaded');
        }

        const url = '/cnt/topics/campaign/beautyaward/json/tokyo_salons.json?v' + str;

        axios.get(url).then(function (response) {
          _this.results = response.data;
        }).catch(function onRejected(error) {
        });
      })
    },
    computed: {
      processedPosts: function processedPosts() {
        const posts = this.results;
      }
    }
  });
}

// read tokyo_stylists.json
function readJsonTokyoStylists(){

  const vmCpnList = new Vue({
    el: '#beststylisttokyo',
    data: {
      results: []
    },
    mounted: function mounted() {
      const _this = this;

      // 全体がレンダリングされた後にのみ実行される
      _this.$nextTick(function() {

        // loadしたら表示(class='-loaded'を付与)
        const obj = document.getElementById('beststylisttokyo');
        if(obj !== null){
          obj.classList.add('-loaded');
        }

        const url = '/cnt/topics/campaign/beautyaward/json/tokyo_stylists.json?v' + str;

        axios.get(url).then(function (response) {
          _this.results = response.data;
        }).catch(function onRejected(error) {
        });
      })
    },
    computed: {
      processedPosts: function processedPosts() {
        const posts = this.results;
      }
    }
  });
}


// ------------------------------------------------------- //


// 下記どれかの方法でjson読み込み実行
// 1.呼び出したいjson名（ハイフン抜き）を各pug上でtrueに定義。変数が定義されていて、かつtrueならfunctionを実行
// 2.直接functionを呼び出す

if (typeof sendaisalons != 'undefined'){
  if(sendaisalons === true){
    readJsonSendaiSalons();
  }
}
if (typeof sendaistylists != 'undefined'){
  if(sendaistylists === true){
    readJsonSendaiStylists();
  }
}
if (typeof kobesalons != 'undefined'){
  if(kobesalons === true){
    readJsonKobeSalons();
  }
}
if (typeof kobestylists != 'undefined'){
  if(kobestylists === true){
    readJsonKobeStylists();
  }
}
if (typeof fukuokasalons != 'undefined'){
  if(fukuokasalons === true){
    readJsonFukuokaSalons();
  }
}
if (typeof fukuokastylists != 'undefined'){
  if(fukuokastylists === true){
    readJsonFukuokaStylists();
  }
}
if (typeof saitamasalons != 'undefined'){
  if(saitamasalons === true){
    readJsonSaitamaSalons();
  }
}
if (typeof saitamastylists != 'undefined'){
  if(saitamastylists === true){
    readJsonSaitamaStylists();
  }
}
if (typeof sapporosalons != 'undefined'){
  if(sapporosalons === true){
    readJsonSapporoSalons();
  }
}
if (typeof sapporostylists != 'undefined'){
  if(sapporostylists === true){
    readJsonSapporoStylists();
  }
}
if (typeof hiroshimasalons != 'undefined'){
  if(hiroshimasalons === true){
    readJsonHiroshimaSalons();
  }
}
if (typeof hiroshimastylists != 'undefined'){
  if(hiroshimastylists === true){
    readJsonHiroshimaStylists();
  }
}
if (typeof tokyosalons != 'undefined'){
  if(tokyosalons === true){
    readJsonTokyoSalons();
  }
}
if (typeof tokyostylists != 'undefined'){
  if(tokyostylists === true){
    readJsonTokyoStylists();
  }
}
