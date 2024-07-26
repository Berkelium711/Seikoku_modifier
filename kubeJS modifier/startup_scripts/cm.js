ItemEvents.modification( event => {

	//Only supports armor
	event.modify("composite_material:etherite_helmet", modification => {
		modification.setArmorProtection(0)
		modification.setArmorToughness(0)
		modification.setArmorKnockbackResistance(0)
	})
	event.modify("composite_material:etherite_leggings", modification => {
		modification.setArmorProtection(0)
		modification.setArmorToughness(0)
		modification.setArmorKnockbackResistance(0)
	})
	event.modify("composite_material:etherite_chestplate", modification => {
		modification.setArmorProtection(0)
		modification.setArmorToughness(0)
		modification.setArmorKnockbackResistance(0)
	})
	event.modify("composite_material:etherite_boots", modification => {
		modification.setArmorProtection(0)
		modification.setArmorToughness(0)
		modification.setArmorKnockbackResistance(0)
	})

})