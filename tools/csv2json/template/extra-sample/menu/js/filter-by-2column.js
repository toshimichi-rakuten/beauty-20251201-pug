const shopListFilter = new Vue({
  el: '#salonFilterContainer',
  data: function() {
    return {
      select1: "",
      select2: "",
      salonList: [],
      filteredSalonList: [],
      exportedSelect1List: [],
      exportedSelect2List: [],
      select1List: [],
      select2List: [],
      filterCounter: 0,
      count: 0
    }
  },
  methods: {

    // 初期データ構築
    initializeData: function() {
      const _self = this

      // jsonデータ取得
      this.getJsonData("./json/shoplist.json")
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
          _self.salonList = _self.filteredSalonList = response.data
         })
    },


    getCount: function(data, val) {
      return data.filter(function(x){ return x == val }).length;
    },

    // select1の選択肢一覧のデータを整形
    setSelect1List: function() {
      // select1 データ抜き出し
      this.exportedSelect1List = this.exportedSelect(this.salonList, 'select1')

      // select1 重複データ削除
      this.select1List = this.removedDuplicateData(this.exportedSelect1List)
    },

    // select2の選択肢一覧のデータを整形
    setSelect2List: function() {
      const _self = this
      const select1List = this.salonList.filter(function (item) {
        return item.select1 == _self.select1
      })

      // select2 データ抜き出し
      this.exportedSelect2List = this.exportedSelect(select1List, 'select2')

      // select2 重複データ削除
      this.select2List = this.removedDuplicateData(this.exportedSelect2List)

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
    },

    //- 検索実行
    search: function() {
      const _self = this

      if(this.select1 && !this.select2) {
        // select1のみ選択

        // 店舗一覧をselect1でフィルター
        this.filteredSalonList = this.salonList.filter(function (item) {
          return item.select1 == _self.select1
        })
      } else if(this.select1 && this.select2) {
        // select1, 2 両方選択

        // 店舗一覧をselect1とselect2でフィルター
        this.filteredSalonList = this.salonList.filter(function (item) {
          return item.select1 == _self.select1 && item.select2 == _self.select2
        })
      } else {
        // null
        this.filteredSalonList = this.salonList
      }

      //- ふわっとコンテンツを表示
      this.showFadeInList()

      //- click event
      dataLayer.push({ 'event': 'filtered_cnt_shoplist' })

      //- 検索回数カウント
      this.filterCounter++
    }

  },

  watch: {
    salonList: function() {
      //- ふわっとコンテンツを表示
      this.showFadeInList()
    },
    select1: function(val) {
      this.select2 = ''
      this.$refs.button.disabled = false
      this.$refs.select2.disabled = false


      if(val == '') {
        this.$refs.select2.disabled = true
        if(this.filterCounter == 0) {
          this.$refs.button.disabled = true
        } else {
          // 件数計算
          this.count = this.salonList.length
        }
      } else {
        // 件数計算
        this.count = this.getCount(this.exportedSelect1List, val)
        this.setSelect2List()
      }
    },
    select2: function(val) {
      if(val == '') {
        // 件数計算
        this.count = this.getCount(this.exportedSelect1List, this.select1)

        // this.count = this.salonList.length
      } else {
        // 件数計算
        this.count = this.getCount(this.exportedSelect2List, val)
      }
    }
  },

  created: function() {
    //- 初期データ構築
    this.initializeData()
  }

});
