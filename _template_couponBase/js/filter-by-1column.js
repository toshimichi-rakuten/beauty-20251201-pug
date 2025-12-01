const shopListFilter = new Vue({
  el: '#salonFilterContainer',
  data: function() {
    return {
      salonList: [],
      filteredSalonList: [],
      exportedSelect1List: [],
      removedSelect1List: [],
      select1List: [],
      select1: firstSelect1
    }
  },
  methods: {

    //- 初期データ構築
    initializeData: function() {
      const _self = this

      //- jsonデータ取得
      this.getJsonData("./json/shoplist.json" + param)
        .then(function() {
          // select1の選択肢一覧のデータを整形
          _self.setSelect1List()

          // ローディング削除
          _self.removedLoading(_self.$refs.wrapper)
        })
    },

    getJsonData: function(fileName) {
      const _self = this
      return axios
        .get(fileName)
        .then(function(response) {
          _self.salonList = response.data
         })
    },


    // select1の選択肢一覧のデータを整形
    setSelect1List: function() {
      // select1 データ抜き出し
      this.exportedSelect1List = this.exportedSelect(this.salonList, 'select1')

      // select1 重複データ削除
      this.removedSelect1List = this.removedDuplicateData(this.exportedSelect1List)

      // 重複数をカウントする
      const reduceData = this.reduceData(this.exportedSelect1List)

      // select1 + 件数でデータを整形する
      this.select1List = this.formattedSelectData(this.removedSelect1List, reduceData)
    },

    // select データ抜き出し
    exportedSelect: function(data, key) {
      return data.map(function (item) {
        return item[key];
      })
    },

    // 重複削除
    removedDuplicateData: function(data) {
      const response = new Set(data) //重複削除
      const array = Array.from(response) //配列形式に変換

      return array
    },

    // 重複数をカウントする
    reduceData: function(data, key) {
      return data.reduce(function(prev, current) {
        prev[current] = (prev[current] || 0) + 1;
        return prev;
      }, {});
    },

    // select1 + 件数でデータを整形する
    formattedSelectData: function(data, count) {
      var array = []
      for(var index in data) {
        array[index] = { 'name': data[index], 'count': count[data[index]] }
      }
      return array
    },

    // Loading 非表示
    removedLoading: function(refs) {
      refs.classList.remove("is-loading")
    },

    //- Loading 表示
    showLoading: function(refs) {
      refs.classList.add("is-loading")
    },

    //- ふわっとコンテンツを表示させるために、コンテンツ非表示 → 表示
    showFadeInList: function() {
      this.removedLoading(this.$refs.list)

      //- hack for reflow (コンテンツ reflow -> コンテンツをふわっと表示)
      void this.$refs.list.offsetWidth
      void this.$refs.list.offsetHeight

      this.showLoading(this.$refs.list)
    }

  },

  watch: {
    salonList: function() {
      //- ふわっとコンテンツを表示
      this.showFadeInList()
    },
    select1: function() {
      //- ふわっとコンテンツを表示
      this.showFadeInList()

      //- click event
      dataLayer.push({ 'event': 'filtered_cnt_shoplist' })
    }
  },

  created: function() {
    //- 初期データ構築
    this.initializeData()
  },

  computed: {
    filterList: function() {
      const _self = this
      if(this.select1) {
        // 絞り込み時は同じエリアのリストだけを返す
        this.filteredSalonList = this.salonList.filter(function (item) {
          return item.select1 == _self.select1
        })
      } else {
        // 初期値 or null 全出力
        this.filteredSalonList = this.salonList
      }
      return this.filteredSalonList
      // return this.salonList
    }
  }

});
