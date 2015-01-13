require 'spec_helper'

feature 'The list of all the contacts' do

  scenario 'is visible on the page', js: true do
    visit '/'
    expect(page).to have_css('li')
  end

  scenario 'in alphabetical order', js: true do
    visit '/'
    sleep(1)
    expect(first('.contact')).to have_content('Bannon')
  end

  scenario 'with the informations', js: true do
    visit '/'
    expect(page).to have_content('Banana Street')
    expect(page).to have_content('07411857962')
    expect(page).to have_content('Barry@banana.org')
  end

  scenario 'after the serach, you can see all the contacts by pressing a button', js: true do
    visit '/'
    fill_in :search, with: 'ginola'
    click_on 'Search'
    click_on 'Show all'
    expect(page).to have_content 'Ginola David'
    expect(page).to have_content 'Bannon Barry'
  end

end
