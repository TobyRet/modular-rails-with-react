Todo::Task.create!(title: 'First OMiC task', content: 'Do this task next week')
Todo::Task.create!(title: 'Second OMiC task', content: 'Do this task next month')
puts 'Seeded two tasks'
Allocation::Offender.create!(name: 'Bobby Smith', risk_level: 'High')
Allocation::Offender.create!(name: 'Rob Guest', risk_level: 'Low')
puts 'Seeded two offenders'
