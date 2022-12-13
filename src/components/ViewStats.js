import React, {useEffect, useState} from 'react';

export function ViewStats({bye, loaddream}) {
    bye();

    // counts how many total dreams the user has recorded
    const total_dream_count = loaddream.length;

    // used to test that total dreams was correctly counted
    console.log("Total dreams are: ", total_dream_count);

    // holds all of the dream data
    var [data,setdata] =useState(loaddream);

    // function to count how many dreams are a specific type
    // returns the percentage of dreams of that type
    function countType(typename)
    {
        var count = 0;
        if (total_dream_count == 0) // in case there are no dreams
        {
            return 0;
        }
        else
        {
            for (var i = 0; i < loaddream.length; i++){
                if (data[i].type == typename) {
                     count ++;
                }
            }
            return Math.round(count / total_dream_count * 10000) / 100;
        }
    }

    // figures out the percentage for each type of dream
    var normal_dream_percent = countType('normal dream');
    var day_dream_percent = countType('day dream');
    var lucid_dream_percent = countType('lucid dream');
    var false_awakening_dream_percent = countType('false awakening dream');
    var nightmare_percent = countType('nightmare');


    // function to count how many dreams had a specific substance
    // returns the percentage of dreams with that substance
    function countSubstance(substancename)
    {
        var count = 0;
        if (total_dream_count == 0) // in case there are no dreams
        {
            return 0;
        }
        else
        {
            for (var i = 0; i < loaddream.length; i++){
                if (data[i].substance == substancename) {
                    count ++;
                }
            }
            return Math.round(count / total_dream_count * 10000) / 100;
        }
    }

    // figures out the percentage for each substance
     var no_substance_percent = countSubstance('none');
     var stimulant_percent = countSubstance('stimulant');
     var opioid_percent = countSubstance('opioid');
     var depressant_percent = countSubstance('depressant');
     var hallucinogen_percent = countSubstance('hallucinogen');
     var dissociative_percent = countSubstance('dissociative');
     var inhalant_percent = countSubstance('inhalant');
     var cannabis_percent = countSubstance('cannabis');
     var other_substance_percent = countSubstance('other');

    return (
    
    <div>
    <h1>View Stats</h1>
    
    <table>
        <tbody>
            <tr>
                <th>
                    Type of Dream
                </th>
                <th>
                    Percentage of Dreams
                </th>
            </tr>
            <tr>
                <td>
                    Normal Dream
                </td>
                <td>
                    {normal_dream_percent}%
                </td>
            </tr>
            <tr>
                <td>
                    Day Dream
                </td>
                <td>
                    {day_dream_percent}%
                </td>
            </tr>
            <tr>
                <td>
                    Lucid Dream
                </td>
                <td>
                    {lucid_dream_percent}%
                </td>
            </tr>
            <tr>
                <td>
                    False Awakening Dream
                </td>
                <td>
                    {false_awakening_dream_percent}%
                </td>
            </tr>
            <tr>
                <td>
                    Nightmare
                </td>
                <td>
                    {nightmare_percent}%
                </td>
            </tr>
        </tbody>
    </table>

 
    
    <table>
        <tbody>
            <tr>
                <th>
                    Type of Substance
                </th>
                <th>
                    Percentage of Dreams
                </th>
            </tr>
            <tr>
                <td>
                    None
                </td>
                <td>
                    {no_substance_percent}%
                </td>
            </tr>
            <tr>
                <td>
                    Stimulant
                </td>
                <td>
                    {stimulant_percent}%
                </td>
            </tr>
            <tr>
                <td>
                    Opioid
                </td>
                <td>
                    {opioid_percent}%
                </td>
            </tr>
            <tr>
                <td>
                    Depressant
                </td>
                <td>
                    {depressant_percent}%
                </td>
            </tr>
            <tr>
                <td>
                    Hallucinogen
                </td>
                <td>
                    {hallucinogen_percent}%
                </td>
            </tr>
            <tr>
                <td>
                    Dissociative
                </td>
                <td>
                    {dissociative_percent}%
                </td>
            </tr>
            <tr>
                <td>
                    Inhalant
                </td>
                <td>
                    {inhalant_percent}%
                </td>
            </tr>
            <tr>
                <td>
                    Cannabis
                </td>
                <td>
                    {cannabis_percent}%
                </td>
            </tr>
            <tr>
                <td>
                    Other
                </td>
                <td>
                    {other_substance_percent}%
                </td>
            </tr>
        </tbody>
    </table>
    
    </div>
    )
}

export default ViewStats
