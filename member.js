function skillsMember() {
    return {
        restrick: 'E',
        templateUrl: 'modules/skills/member.html',
        controller: 'SkillsMemberCtrl',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            member: '='
        }
    };
}