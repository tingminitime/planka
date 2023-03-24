export default {
  format: {
    date: 'M/d/yyyy',
    time: 'p',
    dateTime: '$t(format:date) $t(format:time)',
    longDate: 'MMM d',
    longDateTime: "MMMM d 'at' p",
  },

  translation: {
    common: {
      account: '帳號',
      actions: '操作',
      addAttachment_title: '上傳附件',
      addComment: '新增評論',
      addManager_title: '新增專案管理員',
      addMember_title: '新增成員',
      addUser_title: '新增用戶',
      administrator: '管理員',
      all: '全部',
      allChangesWillBeAutomaticallySavedAfterConnectionRestored: '所有修改會在重新連線後自動儲存',
      areYouSureYouWantToDeleteThisAttachment: '確認刪除此附件嗎？',
      areYouSureYouWantToDeleteThisBoard: '確認刪除此面板嗎？',
      areYouSureYouWantToDeleteThisCard: '確認刪除此卡片嗎？',
      areYouSureYouWantToDeleteThisComment: '確認刪除此評論嗎？',
      areYouSureYouWantToDeleteThisLabel: '確認刪除此標籤嗎？',
      areYouSureYouWantToDeleteThisList: '確認刪除此列表嗎？',
      areYouSureYouWantToDeleteThisProject: '確認刪除此專案嗎？',
      areYouSureYouWantToDeleteThisTask: '確認刪除此任務嗎？',
      areYouSureYouWantToDeleteThisUser: '確認刪除此用戶嗎？',
      areYouSureYouWantToLeaveBoard: '確認離開此面板嗎？',
      areYouSureYouWantToLeaveProject: '確認離開此專案嗎？',
      areYouSureYouWantToRemoveThisManagerFromProject: '確認從本專案刪除該管理員嗎？',
      areYouSureYouWantToRemoveThisMemberFromBoard: '確認本面板刪除該成員嗎？',
      attachment: '附件',
      attachments: '多個附件',
      authentication: '認證',
      background: '背景',
      board: '面板',
      boardNotFound_title: '面板不存在',
      cardActions_title: '卡片操作',
      cardNotFound_title: '卡片不存在',
      cardOrActionAreDeleted: '卡片或操作已經被刪除',
      color: '顏色',
      createBoard_title: '創建面板',
      createLabel_title: '創建標籤',
      createNewOneOrSelectExistingOne: '創建一個新的或者選擇一個已創建的',
      createProject_title: '創建專案',
      createTextFile_title: '創建文本文件',
      currentPassword: '當前密碼',
      dangerZone_title: '危險區域',
      date: '日期',
      dueDate_title: '截止日期',
      deleteAttachment_title: '刪除附件',
      deleteBoard_title: '刪除面板',
      deleteCard_title: '刪除卡片',
      deleteComment_title: '刪除評論',
      deleteLabel_title: '刪除標籤',
      deleteList_title: '刪除列表',
      deleteProject_title: '刪除專案',
      deleteTask_title: '刪除任務',
      deleteUser_title: '刪除用戶',
      description: '描述',
      dropFileToUpload: '拖放文件上傳',
      editAttachment_title: '編輯附件',
      editAvatar_title: '編輯頭像',
      editBoard_title: '編輯面板',
      editDueDate_title: '編輯截止時間',
      editEmail_title: '編輯信箱',
      editLabel_title: '編輯標籤',
      editPassword_title: '修改密碼',
      editStopwatch_title: '修改時間',
      editUsername_title: '修改用戶名',
      email: '信箱',
      emailAlreadyInUse: '信箱已使用',
      enterCardTitle: '輸入卡片標題...',
      enterDescription: '輸入描述...',
      enterFilename: '輸入文件名',
      enterListTitle: '輸入列表標題...',
      enterProjectTitle: '輸入專案標題',
      enterTaskDescription: '輸入任務描述...',
      filterByLabels_title: '透過標籤篩選',
      filterByMembers_title: '透過成員篩選',
      fromComputer_title: '從本機',
      general: '全體',
      hours: '小時',
      invalidCurrentPassword: '當前密碼錯誤',
      labels: '標籤',
      leaveBoard_title: '離開面板',
      leaveProject_title: '離開專案',
      list: '列表',
      listActions_title: '列表操作',
      managers: '專案管理員',
      members: '成員',
      minutes: '分鐘',
      moveCard_title: '移動卡片',
      name: '姓名',
      newEmail: '新信箱',
      newPassword: '新密碼',
      newUsername: '新用戶名稱',
      noConnectionToServer: '未連線至伺服器',
      noBoards: '沒有面板',
      noLists: '沒有列表',
      noProjects: '沒有專案',
      notifications: '通知',
      noUnreadNotifications: '沒有未讀通知',
      openBoard_title: '打開面板',
      optional_inline: '可選的',
      organization: '組織機構',
      phone: '電話',
      preferences: '偏好',
      pressPasteShortcutToAddAttachmentFromClipboard:
        '提示: 按下 Ctrl-V (Mac: Cmd-V) 從剪貼版上傳附件',
      project: '專案',
      projectNotFound_title: '專案未找到',
      removeManager_title: '刪除管理員',
      removeMember_title: '刪除成員',
      seconds: '秒',
      selectBoard: '選擇面板',
      selectList: '選擇列表',
      selectProject: '選擇專案',
      settings: '設定',
      stopwatch: '計時器',
      subscribeToMyOwnCardsByDefault: '預設關注自己創建的卡片',
      taskActions_title: '任務操作',
      tasks: '任務',
      time: '時間',
      title: '標題',
      userActions_title: '使用者操作',
      userAddedThisCardToList: '<0>{{user}}</0><1> 向列表 {{list}} 新增了該卡片</1>',
      userLeftNewCommentToCard: '{{user}} 給 {{card}} 新增了一个新評論 «{{comment}}»',
      userMovedCardFromListToList:
        '{{user}} 將卡片 <2>{{card}}</2> 從 {{fromList}} 移動到 {{toList}}',
      userMovedThisCardFromListToList:
        '<0>{{user}}</0><1> 將該卡片從 {{fromList}} 移動到 {{toList}}</1>',
      username: '用戶名稱',
      usernameAlreadyInUse: '用戶名稱已被占用',
      users: '用戶',
      writeComment: '撰寫評論...',
    },

    action: {
      addAnotherCard: '新增別的卡片',
      addAnotherList: '新增別的列表',
      addAnotherTask: '新增別的任務',
      addCard: '新增卡片',
      addCard_title: '新增卡片',
      addComment: '新增評論',
      addList: '新增列表',
      addMoreDetailedDescription: '新增更多詳細描述',
      addTask: '新增任務',
      addToCard: '新增到卡片',
      addUser: '新增用戶',
      createBoard: '創建面板',
      createFile: '創建文件',
      createLabel: '創建標籤',
      createNewLabel: '創建新標籤',
      createProject: '創建專案',
      delete: '刪除',
      deleteAttachment: '刪除附件',
      deleteAvatar: '刪除頭像',
      deleteBoard: '刪除面板',
      deleteCard: '刪除卡片',
      deleteCard_title: '刪除卡片',
      deleteComment: '刪除評論',
      deleteImage: '刪除圖片',
      deleteLabel: '刪除標籤',
      deleteList: '刪除列表',
      deleteList_title: '刪除列表',
      deleteProject: '刪除專案',
      deleteProject_title: '刪除專案',
      deleteTask: '刪除任務',
      deleteTask_title: '刪除任務',
      deleteUser: '刪除用戶',
      edit: '編輯',
      editDueDate_title: '編輯到期時間',
      editDescription_title: '編輯描述',
      editEmail_title: '編輯信箱',
      editPassword_title: '編輯密碼',
      editStopwatch_title: '編輯實踐',
      editTitle_title: '編輯標題',
      editUsername_title: '編輯用戶名稱',
      leaveBoard: '離開面板',
      leaveProject: '離開專案',
      logOut_title: '登出',
      makeCover_title: '設定標題',
      move: '移動',
      moveCard_title: '移動卡片',
      remove: '刪除',
      removeBackground: '刪除背景',
      removeCover_title: '刪除封面',
      removeFromBoard: '從面板中刪除',
      removeFromProject: '從專案中刪除',
      removeManager: '刪除管理者',
      removeMember: '刪除成員',
      save: '保存',
      showAllAttachments: '顯示所有的附件 ({{hidden}} 隱藏)',
      showFewerAttachments: '顯示較少的附件',
      start: '開始',
      stop: '結束',
      subscribe: '關注',
      unsubscribe: '取消關注',
      uploadNewAvatar: '上傳新頭像',
      uploadNewImage: '上傳圖片',
    },
  },
};