require 'spec_helper'

feature 'The list of the contacts' do

  scenario 'in alphabetical order' do
    visit '/'
    expect(first('.contact')).to have_content('Bannon')
  end

end
